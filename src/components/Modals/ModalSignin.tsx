interface ModalSigninProps {
  setModalSignin: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalSignin({ setModalSignin }: ModalSigninProps) {
  function handlerRegister(): void {
    setModalSignin(false);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalSignin(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form className="flex flex-col">
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
          <button type="submit" onClick={handlerRegister}>
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalSignin;
