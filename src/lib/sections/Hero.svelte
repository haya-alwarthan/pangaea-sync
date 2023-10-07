<script>
  import Navbar from "$lib/templates/Navbar.svelte";
  import globe from '$lib/assets/images/globe.png';
  import scrollIntoView from '$lib/utils/scrolIntoView';
</script>

<Navbar />
<section id="hero" class="h-screen p-10 py-[8rem] flex items-end justify-center">
  <div class="orb fixed top-0 left-0" />
  <div class="orb fixed top-1/2 right-0" />
  <div class=" absolute top-[28%] left-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="211" height="351" viewBox="0 0 211 351" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6179 1.78792C81.1929 -0.808815 98.0807 68.9325 129.947 109.568C161.214 149.441 214.379 180.135 208.984 230.517C203.188 284.639 156.357 328.345 104.686 345.459C58.9127 360.619 13.1851 334.245 -27.8759 308.965C-62.3178 287.761 -93.8324 259.158 -100.332 219.238C-106.444 181.704 -78.303 151.715 -58.7947 119.071C-32.3715 74.8563 -21.8256 4.37803 29.6179 1.78792Z" stroke="white" stroke-width="2.05757"/>
      </svg>
  </div>

  
  <div class=" absolute top-[32%] left-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="276" viewBox="0 0 180 276" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6209 1.56361C78.0745 -0.47318 91.3208 54.2295 116.315 86.1029C140.84 117.377 182.541 141.453 178.309 180.971C173.763 223.422 137.031 257.704 96.5019 271.127C60.5987 283.018 24.7315 262.331 -7.47531 242.503C-34.4903 225.871 -59.2092 203.436 -64.3075 172.124C-69.1011 142.683 -47.0285 119.161 -31.7269 93.5566C-11.0014 58.8759 -2.72965 3.5952 37.6209 1.56361Z" stroke="white" stroke-width="1.61389"/>
      </svg>
  </div>

  <div class=" absolute top-[23%] left-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="257" height="449" viewBox="0 0 257 449" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4031 2.09024C91.4102 -1.23313 113.024 88.0238 153.807 140.031C193.824 191.061 261.866 230.344 254.961 294.824C247.543 364.091 187.608 420.028 121.478 441.93C62.8953 461.332 4.37187 427.578 -48.1791 395.224C-92.2587 368.086 -132.592 331.48 -140.911 280.389C-148.732 232.351 -112.717 193.971 -87.7498 152.193C-53.9326 95.6052 -40.4358 5.40514 25.4031 2.09024Z" stroke="white" stroke-width="2.63333"/>
        </svg>
  </div>
  
  <main class="flex w-3/4  items-end">
    <div class="flex-1 ">
      <h1 class="text-secondary font-extrabold text-5xl my-2">Pangea Sync</h1>
      <h5 class="text-white text-2xl mb-5">
        Illuminate shadows and radiant horizons of the earth and explore the
        limitless knowledge of the world!
      </h5>
      <div class="flex items-end">
        <div class="border-primary   explore"/>
        <a href="#data"on:click|preventDefault={scrollIntoView} class="text-white no-underline hover:opacity-50 cursor-pointer">Start Exploring</a>

      </div>

    </div>
    
    <div class="flex-2 items-end flex">
        <img src={globe} alt="globe"/>
    </div>

    <div />
  </main>
</section>

<style>
  .orb {
    border-radius: 60%;
    background: #a5a6f6;
    filter: blur(165px);
    width: 500px;
    height: 600px;
    z-index: -1;
  }
  .explore{
    width: 100px;
    height: 100px;
    border: 1px rgba(255, 255, 255, 0.795) solid;
    border-top: 0;
    border-right: 0;
    height: 50vh;
    width: 15vh;
    margin-left: 10%;
 
    
  }
</style>
