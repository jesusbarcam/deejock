import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './leftbar.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return <aside>This is Leftbar component</aside>;
});
