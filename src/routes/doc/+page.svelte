<script
  lang="ts"
>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    const query = new URLSearchParams(window.location.search),
      topic = query.get("topic");

    void goto(
      "https://www.example.com/foo?topic="
        + (topic ?? ""),
      { external: true },
    );
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
