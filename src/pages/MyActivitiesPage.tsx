import { faTrash, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Activities } from '../@types';
import ModalDeleteActivity from '../components/Modals/ModalDeleteActivity';
import ModalEditActivity from '../components/Modals/ModalEditActivity';

function MyActivitiesPage() {
  // Pas besoin de déclarer ce state dans le store étant donné qu'il ne sert que dans ce composant, autant se simplifier la tâche et le mettre en local avec le hook useState.
  const [myActivities, setMyActivities] = useState<Activities[]>([]);
  const [modalDeleteActivity, setModalDeleteActivity] = useState(false);
  const [modalEditActivity, setModalEditActivity] = useState(false);

  function handlerEdit(): void {
    setModalEditActivity((modal) => !modal);
    console.log('object');
  }

  function handlerDelete(): void {
    setModalDeleteActivity((modal) => !modal);
  }

  useEffect(() => {
    async function getMyActivities() {
      const { data } = await axios.get('http://localhost:3000/profil/activity');
      setMyActivities(data.data);
    }
    getMyActivities();
  }, []);

  // const activities  = myActivities.map((myActivity) => {
  //   return (

  //   )
  // })
  return (
    <div className="flex justify-center flex-wrap gap-2 p-5 ">
      <div className=" card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl">
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
              <button onClick={handlerEdit} type="button">
                <FontAwesomeIcon icon={faPen} className=" md:h-6 lg:h-8 m-1" />
              </button>
              <button onClick={handlerDelete} type="button">
                <FontAwesomeIcon
                  icon={faTrash}
                  className=" md:h-6 lg:h-8 m-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalDeleteActivity ? (
        <ModalDeleteActivity setModalDeleteActivity={setModalDeleteActivity} />
      ) : null}
      {modalEditActivity ? (
        <ModalEditActivity setModalEditActivity={setModalEditActivity} />
      ) : null}
    </div>
  );
}
export default MyActivitiesPage;
