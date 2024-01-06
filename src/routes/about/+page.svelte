<script>
	import '$lib/History.svelte';
	import History from '$lib/History.svelte';
	import Skill from '$lib/Skill.svelte';
	import Products from '$lib/Products.svelte';
	import OssContribution from '$lib/OssContribution.svelte';
	import Contest from '$lib/Contest.svelte';
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
	<OssContribution />
	<Contest />
	<h1>Presentation</h1>
</div>
