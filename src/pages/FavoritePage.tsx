import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../store/reducers/profileReducer';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

function FavoritePage() {
  const dispatch = useAppDispatch();

  const myFavorites = useAppSelector((store) => store.profile.myFavorites);

  async function handlerFavorites(id: number): Promise<void> {
    if (!myFavorites.some((favActivity) => favActivity.id === id)) {
      await dispatch(addToFavorites({ id }));
    } else {
      await dispatch(deleteFromFavorites({ id }));
    }
  }

  const myFavoritesActivities = myFavorites.map((activity) => {
    return (
      <div
        key={activity.id}
        className="card bg-white w-40 h-40 md:w-60 md:h-60 lg:w-60 lg:w-60 flex-shrink-0 lg:shadow-xl"
      >
        <figure className="h-40">
          <img
            src={activity.url_image}
            alt={activity.title}
            className="object-cover"
          />
        </figure>
        <div className="px-4 py-2">
          <h2 className="font-semibold font-hind text-sm md:text-sm lg:text-sm">
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
    <div className="flex flex-wrap gap-5 p-5 ">{myFavoritesActivities}</div>
  );
}
export default FavoritePage;
