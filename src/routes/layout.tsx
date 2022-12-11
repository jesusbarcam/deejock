import { component$, Fragment, Slot } from '@builder.io/qwik';

import Header from '../components/header/header';
import Leftbar from '../components/leftbar/leftbar';
import Footer from '../components/footer/footer';

export default component$(() => {
  return (
    <Fragment>
      <Leftbar></Leftbar>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer></Footer>
    </Fragment>
  );
});
