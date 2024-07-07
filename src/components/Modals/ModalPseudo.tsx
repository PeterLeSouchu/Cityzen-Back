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
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalPseudo(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form className="flex flex-col">
          <label htmlFor="pseudo">Nouveau Pseudo</label>
          <input
            type="text"
            placeholder="Entrez votre nouveau pseudo"
            defaultValue="Tom"
          />
          <button type="submit" onClick={handlerRegister}>
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalPseudo;
