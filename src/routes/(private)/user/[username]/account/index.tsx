import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Esta es la parte donde mostramos los datos propios del usuario!</div>;
});

export const head: DocumentHead = { title: 'deejock | account' };
