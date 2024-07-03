function ModalSignup() {
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
            <span className="label-text">Confirmer le mot de passe</span>
          </div>
          <input
            type="password"
            placeholder="confirmer le mot de passe"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="button" className="btn btn-primary">
            Inscription
          </button>
        </div>
      </form>
    </>
  );
}
export default ModalSignup;
