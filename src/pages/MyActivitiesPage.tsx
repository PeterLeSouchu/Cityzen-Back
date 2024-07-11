import { faTrash, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Activities } from '../@types';
import ModalDeleteActivity from '../components/Modals/ModalDeleteActivity';
import ModalEditActivity from '../components/Modals/ModalEditActivity';
import ModalAddActivity from '../components/Modals/ModalAddActivity';

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
      // const { data } = await axios.get('http://localhost:3000/profil/activity');
      // setMyActivities(data.data);
      setMyActivities([
        {
          id: 13,
          title: 'parc bleu',
          url: 'parc-bleu',
          description: 'il s’agit du parc bleu blabla',
          avg_rating: 4.8,
          url_image:
            'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/3/regular.png',
          address: 'rue du JS ',
          phone: '0785475126',
          longitude: 4.25154789,
          latitude: 45.14789315,
          city_id: 78,
          slug: 'hello',
        },
        {
          id: 27,
          title: 'resto du coin bleu',
          url: 'resto-du-coin-bleu',
          description: 'il s’agit du resto du coin blablabla',
          avg_rating: 2.8,
          url_image:
            'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/5/regular.png',
          address: 'rue du chocolat ',
          phone: '0784579685',
          longitude: 7.25154789,
          latitude: 52.14789315,
          city_id: 78,
          slug: 'hello1',
        },
      ]);
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
        className="card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl"
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
            <div className="">
              <button
                onClick={() => openModal('edit', myActivity.id)}
                type="button"
              >
                <FontAwesomeIcon icon={faPen} className="md:h-6 lg:h-8 m-1" />
              </button>
              <button
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
        />
      )}
      {modalType === 'add' && <ModalAddActivity setModalType={setModalType} />}
    </div>
  );
}

export default MyActivitiesPage;
