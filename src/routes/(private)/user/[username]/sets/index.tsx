import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Esta es la zona donde mostraremos el listado de sets del usuario</div>;
});

export const head: DocumentHead = { title: 'deejock | sets' };
