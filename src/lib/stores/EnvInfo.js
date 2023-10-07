import { writable } from "svelte/store";

export const envPanelInfo = writable({
    show:false,
    title: "",
    country: "",
  date: "",
  image: "",
  summary: "",
  link: "",
});


