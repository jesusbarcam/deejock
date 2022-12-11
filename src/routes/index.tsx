import { component$, Fragment } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <Fragment>
      <h1>Hola Deejock!</h1>
      <Link href="/artists">Go to Artists</Link>
      <br />
      <Link href="/labels">Go to Labels</Link>
    </Fragment>
  );
});

export const head: DocumentHead = {
  title: 'Deejock Official Web',
  meta: [
    {
      name: 'description',
      content: 'Deejock site description',
    },
  ],
};
