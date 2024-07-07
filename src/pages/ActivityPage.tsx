import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
// import will from '../assets/will.webp';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Activities } from '../@types';

export const loadActivity = async ({
  params,
}: LoaderFunctionArgs): Promise<Activities> => {
  console.log('PARAMS : ', params);

  try {
    const res = await axios.get<Activities>(
      `http://localhost:3000/activity/${params.id}`
    );

    return res.data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Oops, les données n'ont pas pu être chargées");
  }
};

function ActivityPage() {
  const activity = useLoaderData() as Activities;
  return (
    <div className="bg-white py-10 ">
      <div className="container mx-auto pl-40 p-4">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 md:flex-2">
            <img
              src={activity.image}
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
              {activity.avg_rate}
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
