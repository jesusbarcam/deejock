import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import styles from './menu-link.scss?inline';

interface LinkProps {
  href: string;
  name: string;
  active: boolean;
}
export const MenuLink = component$(({ href, name, active }: LinkProps) => {
  useStylesScoped$(styles);

  return (
    <Link href={href}>
      <div class="inner">
        {active ? <span class="active-background"></span> : null}
        <span class={`link ${active ? 'active' : null}`}>{name}</span>
      </div>
    </Link>
  );
});
