<svelte:head>
  <title>La Genuina - Home</title>
  <meta name="description" content="La Genuina - Il fantacalcio più autentico d'Italia. Scopri l'albo d'oro, le news e tutte le storie della nostra lega." />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://genuina.rubynetti.it/" />
  <meta property="og:title" content="La Genuina - Il fantacalcio più autentico d'Italia" />
  <meta property="og:description" content="La Genuina - Il fantacalcio più autentico d'Italia. Scopri l'albo d'oro, le news e tutte le storie della nostra lega." />
  <meta property="og:site_name" content="La Genuina" />
  <meta property="og:locale" content="it_IT" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:url" content="https://genuina.rubynetti.it/" />
  <meta property="twitter:title" content="La Genuina - Il fantacalcio più autentico d'Italia" />
  <meta property="twitter:description" content="La Genuina - Il fantacalcio più autentico d'Italia. Scopri l'albo d'oro, le news e tutte le storie della nostra lega." />
</svelte:head>

<BigNews
  title="Lacrime ben spese per Basetti"
  author="F. Gallardi"
  corner="Vittoria sicura"
  date="19 Agosto"
  image="https://dimages2.gazzettaobjects.it/files/image_458_275/uploads/2023/08/19/64e106c3cbba1.jpeg"
/>
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

<script>
  import BigNews from "$lib/big_news.svelte";
</script>
