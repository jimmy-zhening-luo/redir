<script
  lang="ts"
>
  import { onMount } from "svelte";

  onMount(() => {
    const query = new URLSearchParams(window.location.search),
    topic = query.get("topic");

    window.location.href = topic
      ?? "https://example.com";
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
    Redirecting...
  </h1>
</section>
