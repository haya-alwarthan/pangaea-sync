<script>
	import danger from '$lib/assets/images/danger.png';
	import seed from '$lib/assets/images/seed.png';
    export let mapType=true
</script>
<div class="inline-flex items-center mx-auto">
    <div class="relative inline-block h-8 w-[5rem] cursor-pointer rounded-full bg-gray-50">
      
      <input
      on:click={()=>{mapType = !mapType}}
        id="switch-component"
        type="checkbox"
        class="peer absolute h-8 w-[5rem] cursor-pointer appearance-none rounded-full bg-red-100 transition-colors duration-300 checked:bg-purple-100 peer-checked:border-purple-300 peer-checked:before:bg-purple-300"
      >


      <label
        for="switch-component"
        class="before:content[''] absolute top-2/4 -left-1 h-10 w-10 -translate-y-2/4 cursor-pointer rounded-full border border-gray-100 bg-red-300 shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-purple-300 peer-checked:before:bg-purple-00"
      >
      <img src={mapType?seed:danger} class="w-8 h-8 z-20" alt="icon"/>

        <div
      
          class="top-2/4 left-2/4 inline-block -translate-x-3/4 -translate-y-2/4 rounded-full p-10"
          data-ripple-dark="true"
        >
    </div>
      </label>
    </div>
  </div>