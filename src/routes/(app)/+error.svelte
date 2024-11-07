<script>
	import { page } from "$app/stores";

	const errors = [
		{ message: "Not Found", error_code: 404, editedMessage: "Вибачте, ми не можемо знайти цю сторінку" }
	]

	console.log($page.error)
</script>

<svelte:head>
	<title>Виникла помилка :(</title>
</svelte:head>

<section>
	{#if $page.error.message === "Not Found"}
		<div class="error-wrapper">
			<div class="code">404</div>
			<div class="description">
				Вибачте, ми не можемо знайти цю сторінку
			</div>
		</div>
	{/if}
</section>