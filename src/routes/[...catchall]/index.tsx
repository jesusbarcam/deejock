import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Esta pagina no existe!</div>;
});

export const head: DocumentHead = { title: "deejock | not-found" };
