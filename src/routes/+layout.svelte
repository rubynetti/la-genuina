<div class="container">
  <div class="header text-center my-5">
    <h1 style="font-family: Ruwudu" class="my-0 fw-bold">La Genuina</h1>
    <h2 style="font-family: Ruwudu" class="my-0 fs-5 fw-normal">Tutte le lacrime del Fanta</h2>
  </div>
  <div>
      <a href="/" class="text-dark text-uppercase fw-bold">Home</a>
      ·
      <a href="/la-genuina" class="text-dark text-uppercase fw-bold">Archivio</a>
      ·
      <a href="/albo" class="text-dark text-uppercase fw-bold">Albo d'Oro</a>
  </div>
  <div>
    <slot></slot>
  </div>
</div>
<script>
export const prerender = true;
</script>