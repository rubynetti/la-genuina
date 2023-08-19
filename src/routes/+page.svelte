<svelte:head>
  <title>La Genuina - Home</title>
</svelte:head>
<div>
<div class="row">
  <div class="col"></div>
  <div class="col-lg-6">
    <BigNews
      title="La prima lacrima è per Tourè"
      author="F. Gallardi"
      corner="Tristezza" 
      date="19 Agosto"
      image="pianto-1.png"
    />
    <BigNews
      title="Il presidente ha in ostaggio le rose"
      author="F. Brefoldi"
      corner="Emergenza" 
      date="18 Agosto"
      image="cover-1.jpg"
    />


  </div><!--.col-lg-6-->
  <div class="col"></div>

</div><!--.row-->

</div>

<script>
  import BigNews from "$lib/big_news.svelte";
</script>
