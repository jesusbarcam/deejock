import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./artists.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="pruebas">
      <p>Hola aqui mostraremos a todos los artistas</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Artists",
};
