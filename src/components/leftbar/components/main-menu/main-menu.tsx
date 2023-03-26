import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import { MenuLink } from './components/menu-link/menu-link';

import styles from './main-menu.scss?inline';

export const homePathName = '/';
export const artistsPathName = '/artists';
export const labelsPathName = '/labels';

export const MainMenu = component$(() => {
  useStylesScoped$(styles);
  const location = useLocation();
  const getLocationName = () => location.url.pathname.split('/').at(1);
  const isActived = (buttonPathname: string) => `/${getLocationName()}` === buttonPathname ?? false;

  return (
    <div class="wrap">
      <MenuLink href={homePathName} name="Home" active={isActived(homePathName)} />
      <MenuLink href={artistsPathName} name="Artists" active={isActived(artistsPathName)} />
      <MenuLink href={labelsPathName} name="Labels" active={isActived(labelsPathName)} />
    </div>
  );
});
