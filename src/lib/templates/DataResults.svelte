<script>
  export let results;
</script>

<div
  class="container p-5 bg-white/70 mx-auto grid grid-cols-3 gap-4 rounded-xl max-h-[70vh] overflow-y-auto"
>
  {#each results as res}
    <div class="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg relative">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{res.title}</div>
        {#if res.last_updated}
        <p class="text-gray-700 text-base">
          <span class="font-bold">Last Updated: </span>
          {res.last_updated}
        </p>
        {/if}

        <div class="pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >#{res.source}</span
            >
        
          </div>

        <p class="text-gray-700 text-base line-clamp-2 my-3 pb-12 mb-12">
          {res.summary}
        </p>
      </div>
      <div class="pt-12 pb-2 flex float-right absolute bottom-2 right-4">

        <a target="_blank" href={res.link}><button class="bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded-xl float-right">Source</button></a>
      </div>
  
    </div>
  {/each}
</div>
