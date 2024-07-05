import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../hooks/redux';

function ActivityCard() {
  const searched = useAppSelector(
    (store) => store.activities.searchedActivities
  );

  const searchedActivities = searched.map((activity) => (
    <div className="card w-80 h-fit lg:shadow-xl" key={activity.id}>
      <figure>
        <img
          src={activity.image}
          alt={activity.title}
          className="object-cover"
        />
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
              {activity.avg_rate}
            </span>
          </div>
          <div className="">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-500 md:h-6 lg:h-8"
            />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-row flex-wrap gap-8 w-7/12 justify-center my-8">
      {searchedActivities}
    </div>
  );
}

export default ActivityCard;
