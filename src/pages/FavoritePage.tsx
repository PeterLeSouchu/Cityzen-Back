import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import {
  addToFavorites,
  deleteFromFavorites,
  getFavorites,
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
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const myFavoritesActivities = myFavorites.map((activity) => {
    return (
      <div
        key={activity.id}
        className=" card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl"
      >
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="object-cover"
          />
        </figure>
        <div className="px-4 py-2">
          <h2 className="font-semibold font-hind text-sm md:text-base lg:text-lg">
            Restaurant, Annecy
          </h2>
          <div className="flex justify-between mt-1">
            <div className="badge bg-grey/50 gap-2 md:p-3 lg:p-4">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300 md:h-4 lg:h-5"
              />
              <span className="font-hind font-semibold text-sm md:text-base lg:text-lg">
                4,1
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
    <div className="flex flex-wrap gap-2 p-5 ">{myFavoritesActivities}</div>
  );
}
export default FavoritePage;
