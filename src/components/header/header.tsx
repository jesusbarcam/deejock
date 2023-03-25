import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import styles from './header.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <label class="main-title">Este es el componente de header!</label>
      <div class="auth-wrap">
        <Link href="/auth/login">
          <span class="link">Login</span>
        </Link>
        <Link href="/auth/register">
          <span class="link">Register</span>
        </Link>
      </div>
    </header>
  );
});
