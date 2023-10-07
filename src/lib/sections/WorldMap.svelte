<script>
    import SwitchButton from "$lib/components/SwitchButton.svelte";
  import DarkMap from "../templates/DarkMap.svelte";
  import EnvPanel from "../templates/EnvPanel.svelte";
  import LightMap from "../templates/LightMap.svelte";
  import ParametersControl from "../templates/ParametersControl.svelte";
  import { envPanelInfo } from "$lib/stores/EnvInfo";

    let mapType= false //Refers to light map
    $: width= $envPanelInfo.show? 'w-3/4':'w-full'
</script>
<section id="wmap" class="h-screen p-10 py-[6rem] ">
    <main class="mx-auto flex-col items-center justify-center">

        <p class="text-secondary  justify-center font-medium text-lg my-4 opacity-60  flex ">Which side are you on?</p>

        <div class="row flex mx-auto items-center"><SwitchButton  bind:mapType/></div>
    </main>

    <div class="map-container p-3">
        {#if mapType}
        <div class="flex">
            {#if $envPanelInfo.show} 
            <EnvPanel/>
            {/if}
            <div class={width}>
                <LightMap/>
            </div>
           
        </div>
     

        {:else}
        <div class="relative">
            <DarkMap/>
            <ParametersControl/>
        </div>
       
            
        {/if}


    </div>


</section>