import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import styles from './artists.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <section class="pruebas">
      <p>Hola aqui mostraremos a todos los artistas</p>
    </section>
  );
});

export const head: DocumentHead = { title: 'deejock | artists' };
