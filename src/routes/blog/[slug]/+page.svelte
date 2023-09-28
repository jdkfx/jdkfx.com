<script>
	export let data;
</script>

<h1>{data.post.title}</h1>
<p>{data.post.date}</p>
<div>{@html data.post.content}</div>
