import { Link, Outlet } from 'react-router-dom';
import { faUser, faHeart, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfilePage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto flex  py-40 p-4 ">
      <div className=" w-1/4 bg-whiteP p-2 rounded-lg shadow border">
        <ul className="flex flex-col justify-center items-center mx-auto md:flex-col gap-20 mt-16">
          <Link
            to="/profile"
            className="flex items-center block text-base lg:text-xl p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300 w-full"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="border rounded-btn p-2 text-3xl md:text-base"
            />
            <span className="hidden md:inline ml-2">Mes informations</span>
          </Link>

          <Link
            to="/profile/favorites"
            className=" flex items-center block text-base lg:text-xl p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300 w-full"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="border rounded-btn p-2 text-3xl md:text-base"
            />{' '}
            <span className="hidden md:inline ml-2">Mes favoris</span>
          </Link>

          <Link
            to="/profile/my-activities"
            className="flex items-center block text-base lg:text-xl p-2 rounded transition duration-300 ease-in-out hover:bg-gray-300 w-full"
          >
            <FontAwesomeIcon
              icon={faListUl}
              className="border rounded-btn p-2 text-3xl md:text-base"
            />{' '}
            <span className="hidden md:inline ml-2">Mes activités</span>
          </Link>
        </ul>
      </div>
      <div className="w-3/4 bg-whiteP p-8 pr-2 ml-4 rounded-lg shadow border">
        <section className="h-full ">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default ProfilePage;
