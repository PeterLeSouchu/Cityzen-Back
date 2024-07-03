import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ActivityPage from '../components/ActivityPage';
import Profile from '../components/Profile';
import Favoris from '../components/Favoris';
import Activites from '../components/Activites';
import Infos from '../components/Infos';

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
