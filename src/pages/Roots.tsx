import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Root() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
