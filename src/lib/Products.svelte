<script>
	import Vooks from '$lib/images/products/vooks.png';
	import Phrame from '$lib/images/products/phrame.png';
	import JdkfxDotCom from '$lib/images/products/jdkfx-com.png';
</script>

<div>
	<div>
		<div class="flex flex-col w-full border-opacity-50 my-10">
			<div class="my-5 divider">
				<h2 class="text-4xl text-center font-semibold">Products</h2>
			</div>
			<div>
				<p class="text-2xl text-center font-semibold">個人開発実績</p>
			</div>
		</div>

		<div class="grid md:grid-cols-2 md:gap-2">
			<div class="card w-96 bg-base-100 shadow-xl mb-2">
				<figure>
					<img src={Vooks} alt="Vooks" />
				</figure>
				<div class="card-body">
					<h2 class="card-title"><a href="https://vooks-4f56b.web.app/">Vooks</a></h2>
					<p>読みたい本、読んだ本を可視化するシンプルな読書管理WEBアプリケーション</p>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">Vue.js</div>
						<div class="badge badge-outline">Vuetify</div>
						<div class="badge badge-outline">Rakuten API</div>
						<div class="badge badge-outline">Firebase</div>
					</div>
				</div>
			</div>

			<div class="card w-96 bg-base-100 shadow-xl mb-2">
				<figure>
					<img src={Phrame} alt="Phrame" />
				</figure>
				<div class="card-body">
					<h2 class="card-title"><a href="https://github.com/jdkfx/phrame">Phrame</a></h2>
					<p>PHPで作成した自作のMVCフレームワーク</p>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">PHP</div>
						<div class="badge badge-outline">MySQL</div>
						<div class="badge badge-outline">Docker</div>
					</div>
				</div>
			</div>

			<div class="card w-96 bg-base-100 shadow-xl mb-2">
				<figure>
					<img src={JdkfxDotCom} alt="jdkfx.com" />
				</figure>
				<div class="card-body">
					<h2 class="card-title"><a href="https://jdkfx.com">jdkfx.com</a></h2>
					<p>ポートフォリオサイト兼、ブログサイト</p>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">Svelte</div>
						<div class="badge badge-outline">daisyUI</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
