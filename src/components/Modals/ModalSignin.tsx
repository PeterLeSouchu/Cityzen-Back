function ModalSignin() {
  return (
    <>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <form className="card-body">
        <div className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <div className="label">
            <span className="label-text">Mot de passe</span>
          </div>
          <input
            type="password"
            placeholder="mot de passe"
            className="input input-bordered"
            required
          />
          <div className="label">
            <a href="#" className="label-text-alt link link-hover">
              Mot de passe oublié ?
            </a>
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="button" className="btn btn-primary">
            Connexion
          </button>
        </div>
      </form>
    </>
  );
}
export default ModalSignin;
