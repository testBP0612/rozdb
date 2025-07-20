// types/api.ts
export interface ApiResponse<T = any> {
	success: boolean;
	data?: T;
	error?: string;
	message?: string;
}

export interface CsvTestResponse {
	success: boolean;
	dataLength: number;
	preview: string;
	message: string;
}
