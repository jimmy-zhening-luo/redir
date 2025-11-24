<script
  lang="ts"
>
  import { onMount } from "svelte";

  onMount(() => {
    window.location.href = "https://example.com";
  });
</script>

<svelte:head>
  <title>Redirection | Doc</title>
  <meta
    name="description"
    content="Redirection | Doc"
  />
</svelte:head>

<section>
  <h1>
    {content}
  </h1>
</section>
