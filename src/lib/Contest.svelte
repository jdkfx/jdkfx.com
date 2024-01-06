<script>
	import MedalRibbonsStarIcon from '$lib/images/medal-ribbons-star.svg';
</script>

<div>
	<div class="flex flex-col w-full border-opacity-50 my-10">
		<div class="my-5 divider">
			<h2 class="text-4xl text-center font-semibold">Contest</h2>
		</div>
		<div>
			<p class="text-2xl text-center font-semibold">コンテスト受賞歴</p>
		</div>
	</div>
	<div>
		<ul>
			<li class="flex gap-2">
				<img
					src={MedalRibbonsStarIcon}
					alt="Medal Ribbons Star Icon"
				/>第24回HiBisインターネットビジネスフォーラム（学生の部）: 最優秀賞・キャンパス賞 -
				2020/11/27
			</li>
			<li class="flex gap-2">
				<img src={MedalRibbonsStarIcon} alt="Medal Ribbons Star Icon" />Japan
				ビジネスデザイン発見&発表会η 2020-2021: 地方創生大賞・ナイスビジネス賞 - 2021/03/12
			</li>
			<li class="flex gap-2">
				<img src={MedalRibbonsStarIcon} alt="Medal Ribbons Star Icon" /><a
					href="https://kome100dc.jp/2020/result/100001/"
					>米百俵デジタルコンテスト2020（提出作品「顔バト」）: 技術賞 - 2021/03/18</a
				>
			</li>
		</ul>
	</div>
</div>
