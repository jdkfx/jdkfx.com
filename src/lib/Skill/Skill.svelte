<script>
	import HtmlLogo from '$lib/images/logo/html-logo.svg';
	import CssLogo from '$lib/images/logo/css-logo.svg';
	import PhpLogo from '$lib/images/logo/php-logo.svg';
	import MysqlLogo from '$lib/images/logo/mysql-logo.svg';
	import LaravelLogo from '$lib/images/logo/laravel-logo.svg';
	import DockerLogo from '$lib/images/logo/docker-logo.svg';
	import VueLogo from '$lib/images/logo/vue-logo.svg';
	import SvelteLogo from '$lib/images/logo/svelte-logo.svg';
</script>

<div>
	<div class="flex flex-col w-full border-opacity-50 my-10">
		<div class="my-5 divider">
			<h2 class="text-4xl text-center font-semibold">Skill</h2>
		</div>
		<div>
			<p class="text-2xl text-center font-semibold">スキル</p>
		</div>
		<div class="grid md:grid-cols-8 md:gap-8 grid-cols-6 gap-6">
			<img src={HtmlLogo} alt="HTML Logo" />
			<img src={CssLogo} alt="CSS Logo" />
			<img src={PhpLogo} alt="PHP Logo" />
			<img src={MysqlLogo} alt="MySQL Logo" />
			<img src={LaravelLogo} alt="Laravel Logo" />
			<img src={DockerLogo} alt="Docker Logo" />
			<img src={VueLogo} alt="Vue Logo" />
			<img src={SvelteLogo} alt="Svelte Logo" />
		</div>
	</div>
</div>
