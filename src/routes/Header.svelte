<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
						<a class="btn btn-ghost text-xl" href="/about">About</a>
					</li>
					<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
						<a class="btn btn-ghost text-xl" href="/blog">Blog</a>
					</li>
				</ul>
			</div>
			<a class="btn btn-ghost text-2xl" href="/">JDKFX</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class="btn btn-ghost text-xl" href="/">Home</a>
				</li>
				<div class="divider divider-horizontal" />
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a class="btn btn-ghost text-xl" href="/about">About</a>
				</li>
				<div class="divider divider-horizontal" />
				<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
					<a class="btn btn-ghost text-xl" href="/blog">Blog</a>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<a class="btn" href="/">Button</a>
		</div>
	</div>
</header>

<style></style>
