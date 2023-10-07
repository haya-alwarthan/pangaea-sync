<script>
 import { envPanelInfo } from "$lib/stores/EnvInfo";
 import close from '$lib/assets/images/close.png';


  $: img_src= `/src/lib/assets/images/${$envPanelInfo.image}.jpg`

  const closePanel = ()=>{
    envPanelInfo.update((s)=>({
      ...s, 
      show:false

    }))
  }
</script>






<div class="mb-4 w-[30vw] h-[75vh] break-inside p-6  bg-white dark:bg-slate-800 bg-clip-border">
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="row flex justify-end "><img src={close} class="float-right hover:opacity-60" alt="close" on:click={closePanel}/></div>
    <div class="flex">
     <img src={img_src} alt="init img" class="h-[300px]"/>
  </div>
  <div>
    <h2 class="text-3xl font-extrabold dark:text-white">
      {$envPanelInfo.title}
       </h2>
  </div>

  <div class="text-slate-500 dark:text-slate-400">
    {$envPanelInfo.date}
  </div>

  <p class="dark:text-slate-200">
    {$envPanelInfo.summary}
  </p>
  <div class="py-4">
<a target="_blank" href={$envPanelInfo.link}> <button class="bg-primary px-6 py-2 rounded-md text-white float-right me-3 my-3">Join</button></a>


  </div>
 
  </div>