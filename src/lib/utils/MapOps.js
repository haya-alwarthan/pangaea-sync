
      export const   zoomInRiyadh=(map) =>{
        map.flyTo({
    center: [ 46.738586, 24.774265],
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    duration: 10000,
    zoom:5
    });
      }
      export const   moveTo=(map, coordinates) =>{
        map.flyTo({
    center: coordinates,
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    duration: 10000,
    zoom:12
    });
      }
 





