import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/Footer';

function Root() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
