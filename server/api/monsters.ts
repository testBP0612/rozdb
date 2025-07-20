// server/api/monsters.ts
import Papa from 'papaparse';
import type { Monster, MonsterApiResponse } from '~/types/monster';

export default defineEventHandler(async (event): Promise<MonsterApiResponse> => {
	console.log('=== 開始解析怪物資料 ===');

	try {
		const csvUrl: string =
			'https://docs.google.com/spreadsheets/d/1qECMl1dgV0_NnNvcfKj3VmOdgtsV9guMRZFUJzC9TWA/export?format=csv&gid=1864809054';

		console.log('📡 抓取 CSV 資料...');
		const csvText = await $fetch(csvUrl, {
			method: 'GET',
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
				Accept: 'text/csv,text/plain,*/*',
			},
			parseResponse: (txt: string) => txt,
		});

		console.log('✅ CSV 資料取得成功，開始解析...');

		// 使用 Papa Parse 解析 CSV
		return new Promise((resolve) => {
			Papa.parse<any>(String(csvText), {
				header: true, // 使用第一行作為標題
				skipEmptyLines: true, // 跳過空行
				dynamicTyping: false, // 先保持所有資料為字串，手動轉換
				complete: (results) => {
					console.log('📊 解析完成，總行數:', results.data.length);
					console.log('📋 欄位名稱:', results.meta.fields);

					// 轉換資料格式
					const monsters: Monster[] = results.data
						.filter((row: any) => row.ID && row.中文名稱) // 過濾掉無效資料
						.map((row: any, index: number) => {
							try {
								const monster: Monster = {
									verified: row['🔍 驗證狀態'] === 'TRUE',
									id: parseInt(row.ID) || 0,
									nameZh: row.中文名稱 || '',
									nameEn: row.英文名稱 || '',
									level: parseInt(row.等級) || 0,
									hp: parseInt(row.HP) || 0,
									race: row.種族 || '',
									size: row.體型 || '',
									element: row.屬性 || '',
									baseExp: parseInt(row.經驗值) || 0,
									jobExp: parseInt(row.職業經驗值) || 0,
									defense: parseInt(row.防禦) || 0,
									magicDefense: parseInt(row.魔防) || 0,
									drops: row.掉落物 || '',
									locations: row.出沒地 || '',
								};

								// 顯示前幾個怪物的詳細資料
								if (index < 3) {
									console.log(`🐾 怪物 ${index + 1}:`, {
										id: monster.id,
										name: monster.nameZh,
										level: monster.level,
										hp: monster.hp,
									});
								}

								return monster;
							} catch (parseError: any) {
								console.error(`❌ 解析第 ${index + 1} 行失敗:`, parseError.message);
								console.error('📄 原始資料:', row);
								return null;
							}
						})
						.filter((monster): monster is Monster => monster !== null); // 移除解析失敗的資料

					console.log(`✅ 成功解析 ${monsters.length} 個怪物`);

					// 顯示一些統計資料
					const verifiedCount = monsters.filter((m) => m.verified).length;
					const maxLevel = Math.max(...monsters.map((m) => m.level));
					const minLevel = Math.min(...monsters.filter((m) => m.level > 0).map((m) => m.level));

					console.log('📈 統計資料:', {
						total: monsters.length,
						verified: verifiedCount,
						levelRange: `${minLevel} - ${maxLevel}`,
					});

					resolve({
						success: true,
						monsters,
						total: monsters.length,
						message: `成功解析 ${monsters.length} 個怪物資料`,
					});
				},
				error: (error: any) => {
					console.error('❌ CSV 解析失敗:', error);
					resolve({
						success: false,
						monsters: [],
						total: 0,
						message: `CSV 解析失敗: ${error.message}`,
					});
				},
			});
		});
	} catch (error: any) {
		console.error('❌ API 錯誤:', error);
		return {
			success: false,
			monsters: [],
			total: 0,
			message: `取得資料失敗: ${error.message}`,
		};
	}
});
