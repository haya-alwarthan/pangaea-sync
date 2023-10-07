<script>
  import Hero from "$lib/sections/Hero.svelte";
  import SwitchButton from "../lib/components/SwitchButton.svelte";
  import ExploreData from "../lib/sections/ExploreData.svelte";
  import WorldMap from "../lib/sections/WorldMap.svelte";
</script>

<Hero />
<ExploreData/>
<WorldMap/>



<style lang="postcss">
  :global(html) {
    background:#5A5CE7;
    font-family: 'Poppins', sans-serif;
  }
</style>
