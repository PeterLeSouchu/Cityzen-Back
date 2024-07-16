import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../store/reducers/profileReducer';

function ActivitiesPage() {
  const myFavorites = useAppSelector((store) => store.profile.myFavorites);

  const searched = useAppSelector((store) => {
    return store.activities.searchedActivities;
  });

  const dispatch = useAppDispatch();

  async function handlerFavorites(id: number): Promise<void> {
    if (!myFavorites.some((favActivity) => favActivity.id === id)) {
      await dispatch(addToFavorites({ id }));
    } else {
      await dispatch(deleteFromFavorites({ id }));
    }
  }

  const searchedActivities = searched.map((activity) => (
    <div className="card w-60 h-60 lg:shadow-xl" key={activity.id}>
      <figure>
        <Link to={`/activity/${activity.id}`}>
          <img
            src={activity.url_image}
            alt={activity.title}
            className="object-cover"
          />
        </Link>
      </figure>
      <div className="px-4 py-2">
        <Link to={`/activity/${activity.id}`}>
          <h2 className="font-semibold font-hind text-sm md:text-base lg:text-lg">
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
  ));
  return (
    <div className="flex flex-col md:flex-row h-83">
      <div className=" md:w-7/12  w-full py-8 h-50 md:h-83 flex justify-center overflow-scroll">
        <div className="w-11/12 flex flex-wrap gap-5 overflow-scroll justify-center">
          {searchedActivities}
        </div>
      </div>
      <div className="right-0 md:h-83 md:w-5/12 w-full h-50 z-0">
        <Map />
      </div>
    </div>
  );
}

export default ActivitiesPage;
