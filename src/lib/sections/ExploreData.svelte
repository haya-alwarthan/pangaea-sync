<script>
  import DataResults from "../templates/DataResults.svelte";

  let keyword = "";
  let nasaData = [];
  $: nasaDataLen = nasaData.length;

  const getNasaData = async () => {
    console.log("yaho");
    const url = `https://cmr.earthdata.nasa.gov/search/collections.json?has_granules_or_cwic=true&include_facets=v2&include_granule_counts=true&include_has_granules=true&include_tags=edsc.*,opensearch.granule.osdd&keyword=${keyword}*&page_num=1&page_size=20&sort_key[]=has_granules_or_cwic&sort_key[]=-usage_score`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.feed.entry);
    try {
      const results = data.feed.entry;
      results.forEach((res) => {
        nasaData = [
          ...nasaData,
          {
            title: res.title,
            summary: res.summary,
            link: res.links[0].href,
            last_updated: res.updated,
            source: "Nasa Earthdata",
          },
        ];
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getNoaaData = async () => {
    const body = {
      queries: [{ type: "queryText", value: keyword }],
      filters: [],
      facets: true,
      page: { max: 20, offset: 0 },
    };

    const url = "https://data.noaa.gov/onestop/api/search/search/collection";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    });


    const data = await response.json();
    console.log(data);
    try {
      const results = data.data;
      results.forEach((res) => {
        nasaData = [
          ...nasaData,
          {
            title: res.attributes.title,
            summary: "",
            link: res.attributes.links[0].linkUrl,
            last_updated: res.attributes.endYear,
            source: "Noaa",
          },
        ];
      });
    } catch (e) {
      console.log(e);
    }
  };


  const handleDataAggregation = async () =>{
    Promise.all([getNasaData(), getNoaaData()]).then((values) => {
    console.log("ypooooooooo")
  console.log(values);
});
  }
</script>

<section id="data" class="h-screen py-[8rem]">
  <div class="bg-s h-[90vh] w-screen" />

  <div class="flex w-full justify-center mt-10">
    <div class="relative w-[500px]">
      <input
        bind:value={keyword}
        class="py-8 p-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
        type="text"
        placeholder="What are you looking for? "
      />
      <button on:click={handleDataAggregation}>
        <span class="flex absolute right-3 top-5 items-center">
          <svg
            class="fill-blue-500 dark:fill-slate-50"
            style="width: 24px; height: 24px;"
            viewBox="0 0 24 24"
          >
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </span></button
      >
    </div>
  </div>

  <div class="row results">
    {#if nasaDataLen > 0}
      <DataResults results={nasaData} />

    {/if}
  </div>
</section>

<style>
  .bg-s {
    position: absolute;
    z-index: -1;
    background-image: url("/src/lib/assets/images/4S.png");
    background-size: contain;
    background-color: rgba(255, 255, 255, 0.705);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
</style>
