<template>
	<div>
		<!-- Loading State -->
		<div v-if="loading" class="py-8 text-center">
			<div class="border-ro-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2"></div>
			<p class="text-ro-dark">載入怪物資料中...</p>
		</div>

		<!-- Empty State -->
		<div v-else-if="!monsters.length" class="py-8 text-center">
			<p class="text-ro-dark text-lg">目前沒有怪物資料</p>
		</div>

		<!-- Monster Grid -->
		<div v-else>
			<div class="mb-6">
				<p class="text-ro-dark">
					共找到
					<span class="text-ro-primary font-bold">{{ monsters.length }}</span>
					種怪物
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<MonsterCard v-for="monster in monsters" :key="monster.id" :monster="monster" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { Monster } from '~/types/monster';

	interface Props {
		monsters: Monster[];
		loading?: boolean;
	}

	defineProps<Props>();
</script>
