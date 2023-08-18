<script>
  export let title;
  export let author;
  export let date;
  export let corner;
</script>

<figure>
  <span>{{corner}}</span>
  <img alt="" 
      class="img-fluid"
      src="https://images2.gazzettaobjects.it/methode_image/2023/08/18/Calcio/Foto_Calcio/5be6d67a-3d94-11ee-9bab-8ddb4fa9b522_620x349.jpg?v=20230818085641" />  

  <figcaption class="text-white">
    <h3 class="mb-0">{title}</h3>
    <span>{author} {date}</span>
  </figcaption>
</figure>

<style>
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
    background-image: linear-gradient(180deg,transparent 60%,#000);
  }
  
  figcaption {
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
    padding: 1rem 2.125rem;
  }

  h3 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  span {
    color: #d6d6d6 
  }

  </style>