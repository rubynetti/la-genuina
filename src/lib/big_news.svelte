<script>
  export let title;
  export let author;
  export let date;
  export let corner;
  export let image;
</script>

<figure>
  <span class="corner">{corner}</span>
  <img alt="" 
      class="img-fluid"
      src="{image}" />  

  <figcaption class="text-white">
    <h3 class="mb-0">{title}</h3>
    <span>{author} · {date}</span>
  </figcaption>
</figure>

<style>
  .corner {
    background-color: orange;
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    position: absolute;
    text-transform: uppercase;
    left: -10px;
    top: -10px;
    padding: 2px 5px;
  }
  figure {
    position: relative;
  }
  
  figure::after{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    pointer-events: none;
    background-image: linear-gradient(180deg,transparent 10%,#000);
  }
  
  figcaption {
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
    padding: 1rem 2.125rem;
  }

  figure h3 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  figure span {
    color: #d6d6d6 
  }

  </style>