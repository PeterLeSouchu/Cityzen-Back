import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function HomePage() {
  return (
    <>
      <div className="h-screen">
        <div className="h-full text-center font-montserrat flex flex-col justify-center gap-32">
          <h1 className="text-6xl md:text-7xl lg:text-8xl">CityZen</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Vivez votre ville <br />
            <span className="text-green">autrement</span>
          </h2>
        </div>
      </div>

      <div className="h-screen bg-lightgrey flex flex-col justify-center gap-32 md:gap-24 lg:gap-16 ">
        <div className="flex flex-col px-4 md:px-8 lg:mx-auto">
          <h3 className="font-montserrat font-semibold mb-6 text-2xl md:mb-8 md:text-3xl lg:text-4xl lg:mb-10">
            Les plus récentes
          </h3>
          <div className="flex flex-row gap-8 overflow-x-auto max-w-screen lg:py-8">
            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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

            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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

            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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

            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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
          </div>
        </div>
        <div className="flex flex-col px-4 md:px-8 lg:mx-auto">
          <h3 className="font-montserrat font-semibold mb-6 text-2xl md:mb-8 md:text-3xl lg:text-4xl lg:mb-10">
            Les mieux notées
          </h3>
          <div className="flex flex-row gap-8 overflow-x-auto max-w-screen lg:py-8">
            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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

            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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

            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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

            <div className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
