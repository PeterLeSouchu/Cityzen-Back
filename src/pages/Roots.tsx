import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/Footer';
import NavBottom from '../components/NavBottom';

function Root() {
  return (
    <div>
      <Header />
      <section className=" mb-16 md:mb-0">
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
      <NavBottom />
    </div>
  );
}

export default Root;
