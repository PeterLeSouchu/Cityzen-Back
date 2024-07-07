import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Activities } from '../@types';

function HomePage() {
  const [recents, setRecents] = useState<Activities[]>([]);
  const [topRated, setTopRated] = useState<Activities[]>([]);

  useEffect(() => {
    async function fetchRecentsActivities() {
      try {
        const { data } = await axios.get(
          'http://localhost:3000/activity/recent'
        );
        setRecents(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchTopRatedActivities() {
      try {
        const { data } = await axios.get(
          'http://localhost:3000/activity/rating'
        );
        setTopRated(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecentsActivities();
    fetchTopRatedActivities();
  }, []);

  const recentsActivities = recents.map((activity) => {
    return (
      <div
        className="card bg-base-100 min-w-44 max-w-56 w-1/4 h-60 mr-7"
        key={activity.id}
      >
        <figure className="h-2/3">
          <img src={activity.image} alt={activity.title} />
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
    );
  });

  const ratingActivities = topRated.map((activity) => {
    return (
      <div
        className="card bg-base-100 min-w-44 max-w-56 w-1/4 h-60 mr-7"
        key={activity.id}
      >
        <figure className="h-2/3">
          <img src={activity.image} alt={activity.title} />
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
