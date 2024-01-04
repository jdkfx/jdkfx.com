<script>
	import '$lib/History.svelte';
	import History from '$lib/History.svelte';
	import Skill from '$lib/Skill.svelte';
	import Products from 'components-lib/Products.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About me" />
</svelte:head>

<div class="text-column">
	<div class="my-10">
		<h1 class="text-5xl font-bold">About Me</h1>
	</div>
	<History />
	<Skill />
	<Products />
	<h1>OSS Contribution</h1>
	<h1>Contest</h1>
	<h1>Presentation</h1>
</div>
