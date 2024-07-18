import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Activities, LoaderActivities } from '../@types';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import image from '../assets/fondCity__1__2-removebg-preview.png';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../store/reducers/profileReducer';

export const loadActivities = async (): Promise<LoaderActivities> => {
  try {
    const [recentsResponse, topRatedResponse] = await Promise.all([
      axios.get<Activities[]>('http://localhost:3000/activity/recent'),
      axios.get<Activities[]>('http://localhost:3000/activity/rating'),
    ]);

    console.log(recentsResponse.data);
    return {
      recents: recentsResponse.data.data,
      topRated: topRatedResponse.data.data,
    };
  } catch (error: unknown) {
    console.error('Error loading data:', error);
    throw new Error("Oops, les données n'ont pas pu être chargées");
  }
};

function HomePage() {
  const { recents, topRated } = useLoaderData() as LoaderActivities;

  const dispatch = useAppDispatch();

  const myFavorites = useAppSelector((store) => store.profile.myFavorites);

  async function handlerFavorites(id: number): Promise<void> {
    if (myFavorites.some((favActivity) => favActivity.id === id)) {
      await dispatch(deleteFromFavorites({ id }));
    } else {
      await dispatch(addToFavorites({ id }));
    }
  }

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const recentsActivities = recents.map((activity) => {
    return (
      <div
        key={activity.id}
        className="card overflow-hidden bg-white w-60 h-60 flex-shrink-0 "
      >
        <Link to={`/activity/${activity.id}`}>
          <figure className="h-40">
            <img
              src={activity.url_image}
              alt="Shoes"
              className="object-cover"
            />
          </figure>
        </Link>
        <div className="px-4 py-2">
          <Link to={`/activity/${activity.id}`}>
            <h2 className="font-semibold font-hind text-sm md:text-sm lg:text-sm">
              {activity.title}
            </h2>
          </Link>
          <div className="flex justify-between mt-1">
            <div className="badge bg-grey/50 gap-2 md:p-3 lg:p-4">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300 md:h-4 lg:h-5"
              />
              <span className="font-hind font-semibold text-sm md:text-base lg:text-lg">
                {activity.avg_rating}
              </span>
            </div>
            <button
              onClick={() => handlerFavorites(activity.id)}
              type="button"
              aria-label="Ajouter / supprimer des favoris"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={
                  myFavorites.some(
                    (favActivity) => favActivity.id === activity.id
                  )
                    ? 'text-red-500 md:h-6 lg:h-8'
                    : 'text-slate-200 md:h-6 lg:h-8'
                }
              />
            </button>
          </div>
        </div>
      </div>
    );
  });

  const ratingActivities = topRated.map((activity) => {
    return (
      <div
        key={activity.id}
        className="card overflow-hidden  bg-white w-60 h-60 flex-shrink-0 "
      >
        <Link to={`/activity/${activity.id}`}>
          <figure className="h-40">
            <img
              src={activity.url_image}
              alt="Shoes"
              className="object-cover"
            />
          </figure>
        </Link>
        <div className="px-4 py-2">
          <Link to={`/activity/${activity.id}`}>
            <h2 className="font-semibold font-hind text-sm md:text-sm lg:text-sm">
              {activity.title}
            </h2>
          </Link>
          <div className="flex justify-between mt-1">
            <div className="badge bg-grey/50 gap-2 md:p-3 lg:p-4">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300 md:h-4 lg:h-5"
              />
              <span className="font-hind font-semibold text-sm md:text-base lg:text-lg">
                {activity.avg_rating}
              </span>
            </div>
            <button
              onClick={() => handlerFavorites(activity.id)}
              type="button"
              aria-label="Ajouter / supprimer des favoris"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={
                  myFavorites.some(
                    (favActivity) => favActivity.id === activity.id
                  )
                    ? 'text-red-500 md:h-6 lg:h-8'
                    : 'text-slate-200 md:h-6 lg:h-8'
                }
              />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="hero bg-green2 w-screen h-screen flex  md:justify-around md:flex-row  flex-col    ">
        <div className=" h-full w-1/2 flex flex-col justify-center text-center gap-8 md:gap-12 lg:gap-16 font-montserrat z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl">CityZen</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Vivez votre ville <br />
            <span className="text-green italic">autrement</span>
          </h2>
        </div>
        <img src={image} alt="bg-home" className="w-1/2  rounded-lg" />
      </div>

      <div className="bg-lightgrey flex flex-col justify-between">
        <div className="w-3/4 m-auto my-7">
          <div className="flex flex-col w-full">
            <h3 className="font-montserrat font-semibold mb-6 text-2xl md:mb-8 md:text-4xl">
              Les plus récentes
            </h3>
            <div className=" gap-5 flex flex-row overflow-x-auto  ">
              {recentsActivities}
            </div>
          </div>
        </div>
        <div className="w-3/4 m-auto my-7">
          <div className="flex flex-col w-full">
            <h3 className="font-montserrat font-semibold mb-6 text-2xl md:mb-8 md:text-4xl">
              Les mieux notés
            </h3>
            <div className=" gap-5 flex flex-row overflow-x-auto  ">
              {ratingActivities}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
