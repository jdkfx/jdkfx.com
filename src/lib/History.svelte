<script>
	import HistoryContents from './HistoryContents.svelte';
</script>

<div>
	<div class="my-10">
		<h1 class="text-5xl font-bold">About Me</h1>
	</div>

	<div class="flex flex-col w-full border-opacity-50">
		<div class="my-5 divider">
			<h2 class="text-4xl text-center font-semibold">Career</h2>
		</div>
		<div>
			<p class="text-2xl text-center font-semibold">経歴</p>
		</div>
		<div>
			<HistoryContents />
		</div>
	</div>
</div>
