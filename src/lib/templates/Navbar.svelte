<script   >
	
	import logo from '$lib/assets/images/logo.svg';
	import menu from '$lib/assets/images/menu.svg';
	import close from '$lib/assets/images/close.svg';
	import scrollIntoView from '$lib/utils/scrolIntoView';

	let routes = [
		{ title: 'Home', id: 'hero' },
		{ title: 'About', id: 'about' },
		{ title: 'Explore Data', id: 'data' },
		{ title: 'World Map', id: 'wmap' },
	];

	let screenWidth=0;
	let opened = true;


</script>

<svelte:window bind:innerWidth={screenWidth} />

<nav
	id="navbar"
	class="w-full flex items-center py-5 fixed top-0 z-40 mx-auto self-center bg-black/10"
>
<a class="no-underline" href="#hero" on:click|preventDefault={scrollIntoView}>
	<img class="z-99 ml-5 w-16 h-16 object-contain float-left" src={logo} alt="logo" />
</a>
	<div class="w-full flex justify-end items-center max-w-7xl mx-auto ">
	

		{#if screenWidth > 1000}
			<!--Navbar in large screens-->
			<div class="md:flex flex-row">
				<ul class="list-none hidden lg:flex flex-row gap-16 py-5 mx-auto ">
					{#each routes as route}
						<li class="text-lg font-medium text-secondary cursor-pointer hover:text-secondary-hover">
							<a class="no-underline" href={`#${route.id}`} on:click|preventDefault={scrollIntoView}
								>{route.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>

		
			<!--Navbar in smaller screens-->
		{:else}
			<div class="lg:hidden flex flex-1 justify-end items-center">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					src={opened ? menu : close}
					on:click={() => (opened = !opened)}
					alt="menu"
					class="w-[28px] h-[28px] object-contain cursor-pointer mr-5"
				/>
				<div
					class={`${
						opened ? 'hidden' : 'flex'
					} p-8 bg-secondary-hover absolute top-20  right-0  w-screen h-screen z-10 rounded-xl`}
				>
					<ul class="gap-y-12">
						{#each routes as route}
							<li class="text-md my-5  text-primary cursor-pointer hover:text-primary-hover">
								<a
									class="no-underline"
									href={`#${route.id}`}
									on:click|preventDefault={scrollIntoView}>{route.title}</a
								>
							</li>
						{/each}
						
					</ul>
				</div>
			</div>
		{/if}
	</div>
</nav>
