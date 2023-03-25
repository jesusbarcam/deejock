import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Esta es la sección de Labels</div>;
});

export const head: DocumentHead = { title: 'deejock | labels' };
