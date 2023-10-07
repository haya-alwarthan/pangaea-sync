<script>
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl";
  import * as MapOps from "$lib/utils/MapOps";

  let mapElement;
  let map = null;
  let accessToken =
    "pk.eyJ1Ijoicm9iaW5rb2hycyIsImEiOiJjanU5am95bm4xZnZ6NDNrOTRyYTYwdzJzIn0.iMFQgQIlhz36wB3819Xftw";
  let mapStyle = "mapbox://styles/mapbox/dark-v11";
  $: viewState = {
    longitude: -118.2443409,
    latitude: 34.0544779,
    zoom: 1,
    pitch: 0,
    bearing: 0,
  };

  onMount(() => {
    createMap();
    MapOps.moveTo(map,[ -114.351,51.012]);
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

    map.on('load', () => {
map.addSource('mapbox-floods', {
type: 'vector',
// Use any Mapbox-hosted tileset using its tileset id.
// Learn more about where to find a tileset id:
// https://docs.mapbox.com/help/glossary/tileset-id/
url: 'mapbox://hayaofwar.am1sqg23'
});
map.addLayer(
{
'id': 'line',
'type': 'line',
'source': 'mapbox-floods',
'source-layer': 'floods-9icu7v',
'layout': {
'line-join': 'round',
'line-cap': 'round'
},
'paint': {
'line-color': '#60a5fa',
'line-width': 1
}
},
);
});
  }
</script>

<div id="dmap" bind:this={mapElement} />

<style>
  #dmap {
    width: 100%;
    height: 75vh;
    overflow: hidden;
  }
</style>
