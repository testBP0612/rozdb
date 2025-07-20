<template>
	<div class="ro-card transition-transform duration-200 hover:scale-105">
		<!-- Monster Image -->
		<div class="mb-4 flex justify-center">
			<img
				:src="monster.image"
				:alt="monster.name"
				class="border-ro-secondary h-16 w-16 rounded-full border-2 object-cover"
				loading="lazy"
			/>
		</div>

		<!-- Monster Info -->
		<div class="text-center">
			<h3 class="text-ro-primary mb-1 text-lg font-bold">{{ monster.name }}</h3>
			<p class="text-ro-dark mb-3 text-sm">{{ monster.nameEn }}</p>

			<div class="grid grid-cols-2 gap-2 text-sm">
				<div class="bg-ro-bg rounded p-2">
					<span class="font-semibold">等級:</span>
					{{ monster.level }}
				</div>
				<div class="bg-ro-bg rounded p-2">
					<span class="font-semibold">血量:</span>
					{{ monster.hp.toLocaleString() }}
				</div>
				<div class="bg-ro-bg rounded p-2">
					<span class="font-semibold">經驗:</span>
					{{ monster.exp }}
				</div>
				<div class="bg-ro-bg rounded p-2">
					<span class="font-semibold">Job:</span>
					{{ monster.jobExp }}
				</div>
			</div>

			<div class="mt-3 grid grid-cols-3 gap-1 text-xs">
				<span class="rounded bg-blue-100 px-2 py-1 text-blue-800">{{ monster.element }}</span>
				<span class="rounded bg-green-100 px-2 py-1 text-green-800">{{ monster.size }}</span>
				<span class="rounded bg-purple-100 px-2 py-1 text-purple-800">{{ monster.race }}</span>
			</div>

			<!-- Drop Items -->
			<div class="mt-3">
				<h4 class="text-ro-dark mb-1 text-xs font-semibold">主要掉落物:</h4>
				<div class="flex flex-wrap justify-center gap-1">
					<span
						v-for="drop in monster.drops.slice(0, 2)"
						:key="drop.item"
						class="bg-ro-light border-ro-secondary rounded border px-2 py-1 text-xs"
					>
						{{ drop.item }} ({{ drop.rate }}%)
					</span>
				</div>
			</div>

			<!-- Locations -->
			<div class="mt-3">
				<h4 class="text-ro-dark mb-1 text-xs font-semibold">出現地點:</h4>
				<p class="text-ro-dark text-xs">
					{{ monster.location.slice(0, 2).join('、') }}
					<span v-if="monster.location.length > 2">等</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { Monster } from '~/types/monster';

	interface Props {
		monster: Monster;
	}

	defineProps<Props>();
</script>
