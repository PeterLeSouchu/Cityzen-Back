import { faTrash, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Activities } from '../@types';

function MyActivitiesPage() {
  // Pas besoin de déclarer ce state dans le store étant donné qu'il ne sert que dans ce composant, autant se simplifier la tâche et le mettre en local avec le hook useState.
  const [myActivities, setMyActivities] = useState<Activities[]>([]);
  const navigate = useNavigate();

  const activities = myActivities.map((activity) => {
    return (
      <div
        key={activity.id}
        className=" card bg-base-100 w-60 flex-shrink-0 lg:shadow-xl"
      >
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
              <FontAwesomeIcon icon={faPen} className=" md:h-6 lg:h-8 m-1" />
              <button type="button">
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById('my_modal_6').showModal()
                  }
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" md:h-6 lg:h-8 m-1"
                  />
                </button>
                <dialog id="my_modal_6" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <form className="card-body">
                      <div className="form-control">
                        <div className="label">
                          <span className="label-text">Votre pseudo</span>
                        </div>
                        <input
                          type="email"
                          placeholder="pseudo"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <div className="label">
                          <span className="label-text">
                            Votre nouveau pseudo
                          </span>
                        </div>
                        <input
                          type="password"
                          placeholder="nouveau pseudo"
                          className="input input-bordered"
                          required
                        />
                        <div className="label">
                          <span className="label-text">Mot de passe</span>
                        </div>
                        <input
                          type="password"
                          placeholder="mot de passe"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button type="button" className="btn btn-primary">
                          Confirmer
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  function handlerBtn(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    console.log('object');
  }

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
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById('my_modal_6').showModal()
                  }
                >
                  <FontAwesomeIcon
                    icon={faPen}
                    className=" md:h-6 lg:h-8 m-1"
                  />
                </button>
                <dialog id="my_modal_6" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <form className="card-body">
                      <div className="form-control">
                        <div className="label">
                          <span className="label-text">Nouveau titre</span>
                        </div>
                        <input
                          defaultValue="restau"
                          type="email"
                          placeholder="nouveau titre"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <div className="label">
                          <span className="label-text">Photo (1 seule)</span>
                        </div>
                        <input
                          type="file"
                          placeholder="nouvelle photo"
                          className="input input-bordered"
                          accept="image/*"
                          required
                        />
                        <div className="label">
                          <span className="label-text">
                            Nouvelle description
                          </span>
                        </div>
                        <input
                          defaultValue="voici le meilleur restau"
                          type="text"
                          placeholder="nouvelle description"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button type="button" className="btn btn-primary">
                          Confirmer
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>
              </div>
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById('my_modal_7').showModal()
                  }
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" md:h-6 lg:h-8 m-1"
                  />
                </button>
                <dialog id="my_modal_7" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <p>Voulez-vous vraiment supprimer l'activité ?</p>
                    <form method="dialog">
                      <button
                        onClick={handlerBtn}
                        type="button"
                        className="bg-slate-500 p-2"
                      >
                        Oui
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <FontAwesomeIcon icon={faPen} className=" md:h-6 lg:h-8 m-1" />
              <FontAwesomeIcon icon={faTrash} className=" md:h-6 lg:h-8 m-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyActivitiesPage;
