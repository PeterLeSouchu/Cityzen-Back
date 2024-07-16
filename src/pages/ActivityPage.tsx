import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../store/reducers/profileReducer';
import { Activities } from '../@types';

export const loadActivity = async ({ params }: LoaderFunctionArgs) => {
  try {
    console.log('hello');
    const { data } = await axios.get(
      `http://localhost:3000/activity/${params.id}`
    );
    console.log(data);

    return data;
  } catch (error: unknown) {
    console.error('Error loading data:', error);
    throw new Error("Oops, les données n'ont pas pu être chargées");
  }
};

function ActivityPage() {
  const activity = useLoaderData() as Activities;
  console.log(activity);
  const dispatch = useAppDispatch();

  const myFavorites = useAppSelector((store) => store.profile.myFavorites);

  async function handlerFavorites(id: number): Promise<void> {
    if (!myFavorites.some((favActivity) => favActivity.id === id)) {
      await dispatch(addToFavorites({ id }));
    } else {
      await dispatch(deleteFromFavorites({ id }));
    }
  }

  return (
    <div className="bg-white py-10 ">
      <div className="container mx-auto pl-40 p-4">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 md:flex-2">
            <img
              src={activity.url_image}
              alt={activity.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="pl-40 mt-6">
        <div className="flex items-center justify-between">
          <h1 className="mx-4 md:mx-8 lg:mx-16 text-3xl font-montserrats text-black">
            {activity.title}
          </h1>
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
          <div className="badge bg-grey/50 gap-2 md:p-3 lg:p-4 flex mr-80">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300 md:h-4 lg:h-5"
            />
            <span className="font-hind font-semibold text-sm md:text-base lg:text-lg">
              {activity.avg_rating}
            </span>
          </div>
        </div>

        <p className="w-full lg:w-2/5 mx-4 md:mx-8 lg:mx-16 mt-4 mb-10 text-black font-montserrat">
          {activity.description}
        </p>
      </div>
    </div>
  );
}

export default ActivityPage;
