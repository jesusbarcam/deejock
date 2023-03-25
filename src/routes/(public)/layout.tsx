import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';

import Header from '../../components/header/header';
import Leftbar from '../../components/leftbar/leftbar';
import Footer from '../../components/footer/footer';

import styles from './styles.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="layout-container">
      <Leftbar></Leftbar>
      <Header />
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
});
