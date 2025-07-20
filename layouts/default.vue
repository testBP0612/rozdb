<template>
	<div class="bg-ro-bg min-h-screen">
		<!-- Header -->
		<header class="ro-panel mx-4 mt-4">
			<div class="ro-header">
				<h1 class="text-2xl md:text-3xl">仙境傳說：樂園中文資料站</h1>
			</div>

			<!-- Navigation -->
			<nav class="p-4">
				<div class="flex justify-center space-x-4">
					<NuxtLink
						to="/"
						class="ro-button"
						active-class="!bg-ro-dark"
					>
						首頁
					</NuxtLink>
					<NuxtLink
						to="/monsters"
						class="ro-button"
						active-class="!bg-ro-dark"
					>
						怪物資料
					</NuxtLink>
				</div>
			</nav>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto px-4 py-8">
			<slot />
		</main>

		<!-- Footer -->
		<footer class="ro-panel mx-4 mt-8 mb-4">
			<div class="text-ro-dark p-4 text-center">
				<p>&copy; 2025 仙境傳說：樂園中文資料站 | 由社群維護</p>
			</div>
		</footer>
	</div>
</template>
