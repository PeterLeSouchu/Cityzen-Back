interface ModalEditActivityProps {
  setModalEditActivity: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalEditActivity({ setModalEditActivity }: ModalEditActivityProps) {
  function handlerRegister(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setModalEditActivity(false);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalEditActivity(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              placeholder="Entrez le titre de votre activité"
              id="title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="file">Photo (1 seule)</label>
            <input type="file" placeholder="Ajouter une photo" id="file" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Entrez la description de votre activité"
              id="description"
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
export default ModalEditActivity;
