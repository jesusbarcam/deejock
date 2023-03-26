import { useLocation } from '@builder.io/qwik-city';
import { appLogotypeImageName } from '~/settings/resources';

export const logoImageUrl = () => {
  return `${useLocation().url.protocol}//${useLocation().url.host}/${appLogotypeImageName}`;
};
