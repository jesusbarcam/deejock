import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './logotype.scss?inline';

export const DeejockLogotype = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="wrap">
      <img src="deejock.svg"></img>
    </div>
  );
});
