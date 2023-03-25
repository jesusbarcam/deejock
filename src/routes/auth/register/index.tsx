import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <>Esto es el area de registro!</>;
});

export const head: DocumentHead = { title: 'deejock | register' };
