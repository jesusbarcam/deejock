import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { DeejockLogotype } from '../logotype/logotype';
import { MainMenu } from './components/main-menu/main-menu';

import styles from './leftbar.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <aside>
      <div class="wrap">
        <DeejockLogotype />
        <MainMenu />
      </div>
    </aside>
  );
});
