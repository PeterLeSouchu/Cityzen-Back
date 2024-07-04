import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ActivityCard() {
  return (
    <div className="card w-80 h-fit lg:shadow-xl">
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
          <div className="">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-500 md:h-6 lg:h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
