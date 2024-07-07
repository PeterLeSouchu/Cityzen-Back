interface ModalSignupProps {
  setModalSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalSignup({ setModalSignup }: ModalSignupProps) {
  function handlerRegister(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setModalSignup(false);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalSignup(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" placeholder="Entrez votre pseudo" id="pseudo" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Entrez votre adresse mail"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              id="password"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password-confirm">
              confirmation du mot de passe
            </label>
            <input
              type="password"
              placeholder="Confirmer votre mot de passe"
              id="password-confirm"
            />
          </div>
          <button type="submit" onClick={handlerRegister}>
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalSignup;
