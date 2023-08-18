<svelte:head>
  <title>La Genuina - Home</title>
</svelte:head>
<div>
<div class="row">
  <div class="col-lg-6">
    <figure>
      <img alt="" 
          class="img-fluid"
          src="https://images2.gazzettaobjects.it/methode_image/2023/08/18/Calcio/Foto_Calcio/5be6d67a-3d94-11ee-9bab-8ddb4fa9b522_620x349.jpg?v=20230818085641" />  

      <figcaption class="text-white">
        <h3 class="mb-0">Il presidente ha in ostaggio le rose</h3>
        <span>F. Bertoldi 18 Agosto</span>
      </figcaption>
    </figure>
  </div><!--.col-lg-6-->
</div><!--.row-->

</div>

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
</style>