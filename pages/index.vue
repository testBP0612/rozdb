<template>
	<div class="mx-auto max-w-4xl">
		<!-- Hero Section -->
		<div class="ro-panel mb-8">
			<div class="ro-header">
				<h2 class="text-xl md:text-2xl">歡迎來到樂園世界</h2>
			</div>
			<div class="p-6 md:p-8">
				<div class="mb-6 text-center">
					<h3 class="text-ro-primary mb-4 text-2xl font-bold md:text-3xl">
						仙境傳說：樂園中文資料站
					</h3>
					<p class="text-ro-dark text-lg">由社群維護的資料站，提供 RO：樂園怪物資訊</p>
				</div>

				<div class="grid gap-6 md:grid-cols-2">
					<div class="ro-card">
						<h4 class="text-ro-primary mb-3 text-xl font-bold">🗡️ 怪物資料庫</h4>
						<p class="text-ro-dark mb-4">
							詳細的怪物資訊，包含血量、經驗值、掉落物品等完整數據，助你在冒險中做好準備。
						</p>
						<NuxtLink
							to="/monsters"
							class="ro-button inline-block"
						>
							查看怪物資料
						</NuxtLink>
					</div>

					<div class="ro-card">
						<h4 class="text-ro-primary mb-3 text-xl font-bold">📊 數據更新</h4>
						<p class="text-ro-dark mb-4">
							資料持續更新中，由熱心的社群成員維護，確保資訊的準確性與時效性。
						</p>
						<button
							class="ro-button cursor-not-allowed opacity-50"
							disabled
						>
							敬請期待
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- About Section -->
		<div class="ro-panel">
			<div class="ro-header">
				<h3 class="text-xl">關於本站</h3>
			</div>
			<div class="p-6">
				<div class="prose prose-lg text-ro-dark max-w-none">
					<p class="mb-4">
						本站致力於為仙境傳說：樂園的玩家提供最完整、最準確的遊戲資料。
						我們專注於怪物資訊的收集與整理，幫助冒險者們在米德加爾特大陸上的探索之旅。
					</p>
					<p class="mb-4">
						所有資料皆由社群成員共同維護，如果您發現任何錯誤或想要貢獻資料，
						歡迎與我們聯繫。讓我們一起打造最好的 RO 樂園資料站！
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	useHead({
		title: '仙境傳說：樂園中文資料站',
		meta: [{ name: 'description', content: '由社群維護的資料站，提供 RO：樂園怪物資訊' }],
	});
</script>
