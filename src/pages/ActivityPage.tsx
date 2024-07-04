import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../assets/surf1.jpg';
// import will from '../assets/will.webp';

import image2 from '../assets/surf2.jpg';
import image3 from '../assets/surf3.webp';

function ActivityPage() {
  return (
    <div className="bg-white py-10 ">
      <div className="container mx-auto pl-40 p-4">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 md:flex-2">
            <img
              src={image1}
              alt="Surfing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex-1  md:flex-1 flex flex-col gap-2">
            <img
              src={image2}
              alt="Surfing"
              className="w-80 h-full object-cover rounded-lg "
            />
            <img
              src={image3}
              alt="Surfing"
              className="w-80 h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="pl-40 mt-6">
        <div className="flex items-center justify-between">
          <h1 className="mx-4 md:mx-8 lg:mx-16 text-3xl font-montserrats text-black">
            Leçon de surf, Biarritz
          </h1>
          <div className="">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-red-500 mr-20 md:h-6 lg:h-8"
            />
          </div>
          <div className="badge bg-grey/50 gap-2 md:p-3 lg:p-4 flex mr-80">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300 md:h-4 lg:h-5"
            />
            <span className="font-hind font-semibold text-sm md:text-base lg:text-lg">
              4,1
            </span>
          </div>
        </div>

        <p className="w-full lg:w-2/5 mx-4 md:mx-8 lg:mx-16 mt-4 mb-10 text-black font-montserrat">
          Hit the waves in one of France's most famous surf spots on this 2-hour
          private surf lesson in Biarritz. Pull on your wetsuit and grab your
          board. Paddle out into the rolling waves off Biarritz, widely
          considered the finest surf spot along France’s Basque coastline.
        </p>
      </div>
    </div>
  );
}

export default ActivityPage;
