import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { logoImageUrl } from '~/utils/public-resources';

import styles from './logotype.scss?inline';

export const DeejockLogotype = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="wrap">
      <img src={logoImageUrl()}></img>
    </div>
  );
});
