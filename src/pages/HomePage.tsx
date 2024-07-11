import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Activities, LoaderActivities } from '../@types';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
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
    return {
      recents: recentsResponse.data,
      topRated: topRatedResponse.data,
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

  const recentsActivities = recents.map((activity) => {
    return (
      <div
        className="card bg-base-100 min-w-44 max-w-56 w-1/4 h-60 mr-7"
        key={activity.id}
      >
        <figure className="h-2/3">
          <img src={activity.url_image} alt={activity.title} />
        </figure>
        <div className="px-4 py-2">
          <h2 className="font-semibold font-hind text-sm md:text-base lg:text-lg">
            {activity.title}
          </h2>
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
        className="card bg-base-100 min-w-44 max-w-56 w-1/4 h-60 mr-7"
        key={activity.id}
      >
        <figure className="h-2/3">
          <img src={activity.url_image} alt={activity.title} />
        </figure>
        <div className="px-4 py-2">
          <h2 className="font-semibold font-hind text-sm md:text-base lg:text-lg">
            {activity.title}
          </h2>
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
      <div className="h-90 text-center font-montserrat flex flex-col justify-evenly">
        <h1 className="text-6xl md:text-7xl lg:text-8xl">CityZen</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          Vivez votre ville <br />
          <span className="text-green">autrement</span>
        </h2>
      </div>

      <div className="bg-lightgrey flex flex-col justify-between">
        <div className="w-3/4 m-auto my-7">
          <div className="flex flex-col w-full">
            <h3 className="font-montserrat font-semibold mb-6 text-2xl md:mb-8 md:text-4xl">
              Les plus récentes
            </h3>
            <div className="flex flex-row overflow-x-auto  ">
              {recentsActivities}
            </div>
          </div>
        </div>
        <div className="w-3/4 m-auto my-7">
          <div className="flex flex-col w-full">
            <h3 className="font-montserrat font-semibold mb-6 text-2xl md:mb-8 md:text-4xl">
              Les mieux notés
            </h3>
            <div className="flex flex-row overflow-x-auto  ">
              {ratingActivities}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
