<!-- pages/test-monsters.vue -->
<template>
	<div style="padding: 20px">
		<h1>怪物資料測試</h1>

		<button
			:disabled="loading"
			@click="loadMonsters"
		>
			{{ loading ? '載入中...' : '載入怪物資料' }}
		</button>

		<div
			v-if="result"
			style="margin-top: 20px"
		>
			<div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 20px">
				<h3>📊 載入結果</h3>
				<p>
					<strong>成功：</strong>
					{{ result.success }}
				</p>
				<p>
					<strong>總數量：</strong>
					{{ result.total }}
				</p>
				<p>
					<strong>訊息：</strong>
					{{ result.message }}
				</p>
			</div>

			<div v-if="result.monsters.length > 0">
				<h3>🐾 怪物資料預覽（前 10 個）</h3>

				<div style="overflow-x: auto">
					<table style="width: 100%; border-collapse: collapse; margin-top: 10px">
						<thead>
							<tr style="background: #f0f0f0">
								<th style="border: 1px solid #ddd; padding: 8px">ID</th>
								<th style="border: 1px solid #ddd; padding: 8px">中文名稱</th>
								<th style="border: 1px solid #ddd; padding: 8px">英文名稱</th>
								<th style="border: 1px solid #ddd; padding: 8px">等級</th>
								<th style="border: 1px solid #ddd; padding: 8px">HP</th>
								<th style="border: 1px solid #ddd; padding: 8px">種族</th>
								<th style="border: 1px solid #ddd; padding: 8px">體型</th>
								<th style="border: 1px solid #ddd; padding: 8px">屬性</th>
								<th style="border: 1px solid #ddd; padding: 8px">驗證</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="monster in result.monsters.slice(0, 10)"
								:key="monster.id"
							>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.id }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.nameZh }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.nameEn }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.level }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.hp }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.race }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.size }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">{{ monster.element }}</td>
								<td style="border: 1px solid #ddd; padding: 8px">
									<span :style="{ color: monster.verified ? 'green' : 'orange' }">
										{{ monster.verified ? '✅' : '⚠️' }}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<details style="margin-top: 20px">
					<summary>📋 第一個怪物的完整資料</summary>
					<pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; margin-top: 10px">{{
						JSON.stringify(result.monsters[0], null, 2)
					}}</pre>
				</details>
			</div>
		</div>

		<div
			v-if="error"
			style="color: red; margin-top: 20px; background: #ffe6e6; padding: 15px; border-radius: 8px"
		>
			<h3>❌ 錯誤</h3>
			<p>{{ error }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { MonsterApiResponse } from '~/types/monster';

	const loading = ref<boolean>(false);
	const result = ref<MonsterApiResponse | null>(null);
	const error = ref<string | null>(null);

	const loadMonsters = async (): Promise<void> => {
		loading.value = true;
		error.value = null;
		result.value = null;

		try {
			console.log('🔄 開始載入怪物資料...');
			const response = await $fetch<MonsterApiResponse>('/api/monsters');
			console.log('✅ 怪物資料載入完成:', response);
			result.value = response;
		} catch (err: any) {
			console.error('❌ 載入怪物資料失敗:', err);
			error.value = err.message || '未知錯誤';
		} finally {
			loading.value = false;
		}
	};
</script>
