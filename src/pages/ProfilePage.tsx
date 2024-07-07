import { Link, Outlet } from 'react-router-dom';

function ProfilePage() {
  return (
    <div className="w-screen h-80 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center border-2 w-9/12   rounded-md h-5/6 overflow-scroll">
        <section className="md:w-1/6 w-full min-w-16 border-b-2  md:border-r-2 flex flex-row justify-around items-center md:flex-col md:h-full h-24">
          <Link to="/profile" className=" text-base lg:text-xl">
            Mes informations
          </Link>
          <Link to="/profile/favorites" className=" text-base lg:text-xl">
            Mes favoris
          </Link>
          <Link to="/profile/my-activities" className=" text-base lg:text-xl">
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
