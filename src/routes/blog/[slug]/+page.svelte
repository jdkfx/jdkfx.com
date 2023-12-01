<script context="module">
	import { TwitterShareButton } from 'components-lib';
</script>

<script>
	export let data;
</script>

<h1>{data.post.title}</h1>
<p>{data.post.date}</p>
<div>{@html data.post.content}</div>

<TwitterShareButton
	text={data.post.title}
	url="https://jdkfx.com/blog/{data.post.slug}"
	hashtags="jdkfx_blog"
/>
