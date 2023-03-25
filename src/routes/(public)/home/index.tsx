import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Hola esto es el contenido del Home</div>;
});

export const head: DocumentHead = { title: 'deejock | home' };
