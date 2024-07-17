interface ModalPseudoProps {
  setModalPseudo: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalPseudo({ setModalPseudo }: ModalPseudoProps) {
  function handlerRegister(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setModalPseudo(false);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 min-w-80 min-h-2/5 fixed  bg-lightgrey rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-montserrat text-3xl font-semibold italic">
            Modification du pseudo
          </span>
          <button
            onClick={() => {
              setModalPseudo(false);
            }}
            type="button"
            className="btn btn-circle btn-outline"
          >
            <svg
              aria-label="close"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form className="flex flex-col">
          <div className="flex flex-col mb-4">
            <div className="label">
              <label
                htmlFor="pseudo"
                className="font-hind text-xl font-semibold"
              >
                Entrez votre nouveau pseudo
              </label>
            </div>
            <input
              type="text"
              placeholder="Entrez votre nouveau pseudo"
              className="input input-bordered w-full"
              defaultValue="Mon Pseudo"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success md:text-base text-sm text-white mt-4 w-1/4 mx-auto"
            onClick={handlerRegister}
          >
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalPseudo;
