// types/monster.ts
export interface Monster {
	verified: boolean; // 驗證狀態
	id: number; // ID
	nameZh: string; // 中文名稱
	nameEn: string; // 英文名稱
	level: number; // 等級
	hp: number; // HP
	race: string; // 種族
	size: string; // 體型
	element: string; // 屬性
	baseExp: number; // 經驗值
	jobExp: number; // 職業經驗值
	defense: number; // 防禦
	magicDefense: number; // 魔防
	drops: string; // 掉落物
	locations: string; // 出沒地
}

export interface MonsterApiResponse {
	success: boolean;
	monsters: Monster[];
	total: number;
	message: string;
}
