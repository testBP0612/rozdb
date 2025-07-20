<template>
	<div class="mx-auto max-w-6xl">
		<div class="ro-panel">
			<div class="ro-header">
				<h2 class="text-xl md:text-2xl">怪物資料庫</h2>
			</div>
			<div class="p-6">
				<!-- <MonsterList
					:monsters="monsters"
					:loading="loading"
				/> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { CsvTestResponse } from '~/types/api';

	const loading = ref<boolean>(false);
	const result = ref<CsvTestResponse | null>(null);
	const error = ref<string | null>(null);

	const testAPI = async (): Promise<void> => {
		loading.value = true;
		error.value = null;
		result.value = null;

		try {
			console.log('開始呼叫 API...');
			const response = await $fetch<CsvTestResponse>('/api/monsters');
			console.log('API 回應:', response);
			result.value = response;
		} catch (err: any) {
			console.error('呼叫 API 失敗:', err);
			error.value = err.message || '未知錯誤';
		} finally {
			loading.value = false;
		}
	};
</script>
