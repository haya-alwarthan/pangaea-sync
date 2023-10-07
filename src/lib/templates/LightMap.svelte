<script>
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl";
  import * as MapOps from "$lib/utils/MapOps";
  import * as MapApi from "$lib/api/MapAPI";
  import { envPanelInfo } from "$lib/stores/EnvInfo";

  let mapElement;
  let map = null;
  let marker;
  let accessToken ="pk.eyJ1Ijoicm9iaW5rb2hycyIsImEiOiJjanU5am95bm4xZnZ6NDNrOTRyYTYwdzJzIn0.iMFQgQIlhz36wB3819Xftw";
  let mapStyle = "mapbox://styles/mapbox/light-v11";
  $: viewState = {
    longitude: -118.2443409,
    latitude: 34.0544779,
    zoom: 1,
    pitch: 0,
    bearing: 0,
  };

 

  onMount(async () => {
    createMap();
    MapOps.zoomInRiyadh(map);
    const data = await MapApi.getMapDataset("clnebj12o0ta72io2dk5axzak");

    for (const feature of data.features) {
      // create a HTML element for each feature
      //   const el = document.createElement("div");
      //   el.className = "marker";
      //   console.log(feature.geometry.coordinates);

      marker = new mapboxgl.Marker().setLngLat(feature.geometry.coordinates);

      marker.addTo(map);
      marker.getElement().addEventListener("click", () => {
        envPanelInfo.update((s) => ({
          show: true,
          title: feature.properties.title,
          date: feature.properties.date,
          image: feature.properties.image,
          summary:feature.properties.summery,
          link: feature.properties.link,
        }));
		MapOps.moveTo(map, feature.geometry.coordinates)
      
      });
    }
  });

  async function createMap() {
    map = new mapboxgl.Map({
      accessToken: accessToken,
      container: mapElement,
      interactive: true,
      style: mapStyle,
      center: [viewState.longitude, viewState.latitude],
      zoom: viewState.zoom,
      pitch: viewState.pitch,
      bearing: viewState.bearing,
    });
  }
</script>

<div id="map" bind:this={mapElement} />

<style>
  #map {
    width: 100%;
    height: 75vh;
    overflow: hidden;
  }
  .mapboxgl-marker {
    background-image: url("/src/lib/assets/images/leaf-marker.png");
    background-size: contain;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    background-color: red;
  }

  .mapboxgl-marker svg {
    display: none;
  }
</style>
