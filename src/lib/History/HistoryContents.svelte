<script lang="ts">
	import historyMiddle from '$lib/images/icon/history-middle.svg';
	import { histories } from '../../routes/about/history-data';
</script>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
	{#each { length: histories.length } as _, i}
		{#if i % 2 === 0}
			<li>
				<hr />
				<div class="timeline-middle">
					<img src={historyMiddle} alt="History Middle Icon" />
				</div>
				<div class="timeline-start md:text-end">
					<time class="font-mono italic">{histories[i].date}</time>
					<div class="text-lg font-black">{histories[i].company}</div>
					<p>{histories[i].content}</p>
				</div>
				<hr />
			</li>
		{:else}
			<li>
				<hr />
				<div class="timeline-middle">
					<img src={historyMiddle} alt="History Middle Icon" />
				</div>
				<div class="timeline-end">
					<time class="font-mono italic">{histories[i].date}</time>
					<div class="text-lg font-black">{histories[i].company}</div>
					<p>{histories[i].content}</p>
				</div>
				<hr />
			</li>
		{/if}
	{/each}
</ul>
