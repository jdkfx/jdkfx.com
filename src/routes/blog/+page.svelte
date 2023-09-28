<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blog Posts" />
</svelte:head>

<script>
	export let data;
</script>

<div class="text-column">
	<h1>Blog</h1>

	<ul>
		{#each data.summaries as { slug, title, date }}
			<li><a href="/blog/{slug}">{title}</a> - <p>{date}</p></li>
		{/each}
	</ul>
</div>
