import { faTrash, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Activities } from '../@types';
import ModalDeleteActivity from '../components/Modals/ModalDeleteActivity';
import ModalEditActivity from '../components/Modals/ModalEditActivity';
import ModalAddActivity from '../components/Modals/ModalAddActivity';
import { Link } from 'react-router-dom';

function MyActivitiesPage() {
  // On créer un state local qui contient toutes nos activités
  const [myActivities, setMyActivities] = useState<Activities[]>([]);

  // On utilise deux state locaux, un pour le type, et l'autre pour l'id de l'activité
  const [modalType, setModalType] = useState<'edit' | 'delete' | 'add' | null>(
    null
  );
  const [activityId, setActivityId] = useState<number | null>(null);

  // Al'initialisation de lap gae on récupère toutes nos activités créées
  useEffect(() => {
    async function getMyActivities() {
      try {
        const { data } = await axios.get(
          'http://localhost:3000/profil/activity',
          {
            withCredentials: true,
          }
        );
        setMyActivities(data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des activités :', error);
      }
    }
    getMyActivities();
  }, []);

  function openModal(type: 'edit' | 'delete', id: number): void {
    setModalType(type);
    setActivityId(id);
  }

  const activities = myActivities.map((myActivity) => {
    return (
      <div
        key={myActivity.id}
        className="card bg-white w-60 h-60 flex-shrink-0 lg:shadow-xl"
      >
        <figure>
          <Link to={`http://localhost:5173/activity/${myActivity.id}`}>
            <img
              src={myActivity.url_image}
              alt="Shoes"
              className="object-cover"
            />
          </Link>
        </figure>
        <div className="px-4 py-2">
          <Link to={`http://localhost:5173/activity/${myActivity.id}`}>
            <h2 className="font-semibold font-hind text-sm md:text-sm lg:text-sm">
              {myActivity.title}
            </h2>
          </Link>
          <div className="flex justify-between mt-1">
            <div className="badge bg-grey/50 gap-2 md:p-3 lg:p-4">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300 md:h-4 lg:h-5"
              />
              <span className="font-hind font-semibold text-sm md:text-base lg:text-lg">
                {myActivity.avg_rating}
              </span>
            </div>
            <div className="">
              <button
                aria-label="Modifier l'activité"
                onClick={() => openModal('edit', myActivity.id)}
                type="button"
              >
                <FontAwesomeIcon icon={faPen} className="md:h-6 lg:h-8 m-1" />
              </button>
              <button
                aria-label="Supprimer l'activité"
                onClick={() => openModal('delete', myActivity.id)}
                type="button"
              >
                <FontAwesomeIcon icon={faTrash} className="md:h-6 lg:h-8 m-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  function handlerAdd(): void {
    setModalType('add');
  }

  return (
    <div className="flex justify-center flex-wrap gap-2 p-5">
      {activities}
      <button
        onClick={handlerAdd}
        type="button"
        className="w-60 md:text-7xl text-5xl"
      >
        +
      </button>

      {modalType === 'edit' && activityId !== null && (
        <ModalEditActivity
          id={activityId}
          setModalType={setModalType}
          setActivityId={setActivityId}
        />
      )}

      {modalType === 'delete' && activityId !== null && (
        <ModalDeleteActivity
          id={activityId}
          setModalType={setModalType}
          setActivityId={setActivityId}
          setMyActivities={setMyActivities}
        />
      )}
      {modalType === 'add' && (
        <ModalAddActivity
          setMyActivities={setMyActivities}
          setModalType={setModalType}
        />
      )}
    </div>
  );
}

export default MyActivitiesPage;
