import { Link, Outlet } from 'react-router-dom';

function ProfilePage() {
  return (
    <div className="w-screen h-80 flex items-center justify-center">
      <div className="flex items-center border-2 w-9/12   rounded-md h-5/6 overflow-scroll">
        <section className="w-1/6 min-w-16  border-r-2 flex justify-around items-center flex-col h-full">
          <Link to="/profile" className="md:text-xl">
            Mes informations
          </Link>
          <Link to="/profile/favorites" className=" text-base lg:text-xl">
            Mes favoris
          </Link>
          <Link to="/profile/my-activities" className="md:text-xl">
            Mes activités
          </Link>
        </section>
        <section className="h-full">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
export default ProfilePage;
