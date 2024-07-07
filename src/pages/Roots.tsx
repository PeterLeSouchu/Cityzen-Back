import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/Footer';
import NavBottom from '../components/NavBottom';
// import ActivityPage from './ActivityPage';

function Root() {
  return (
    <div>
      <Header />
      <section className=" mb-7 md:mb-0 min-h-90 ">
        <main className="min-h-83">
          <Outlet />
        </main>
        <Footer />
      </section>
      <NavBottom />
    </div>
  );
}

export default Root;
