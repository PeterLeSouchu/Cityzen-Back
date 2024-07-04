import { Link } from 'react-router-dom';

function InfosPage() {
  return (
    <>
      <div className="flex flex-col justify-between m-7">
        <label htmlFor="pseudo">Peudo</label>
        <div className="flex justify-between">
          <input type="text" id="pseudo" disabled placeholder="Pseudo" />
          <button type="button">
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById('my_modal_6').showModal()}
            >
              Change
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
                      <span className="label-text">Votre nouveau pseudo</span>
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

      <div className="flex flex-col justify-between m-7">
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" disabled placeholder="Email" />
      </div>

      <Link to="/" className="m-7">
        Modifier mon mot de passe
      </Link>
    </>
  );
}
export default InfosPage;
