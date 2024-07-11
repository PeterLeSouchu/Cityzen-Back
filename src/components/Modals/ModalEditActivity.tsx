interface ModalEditActivityProps {
  setModalType: React.Dispatch<React.SetStateAction<'edit' | 'delete' | null>>;
  setActivityId: React.Dispatch<React.SetStateAction<number | null>>;
  id: number;
}

function ModalEditActivity({
  setModalType,
  setActivityId,
  id,
}: ModalEditActivityProps) {
  function handlerRegister(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setActivityId(null);
    setModalType(null);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 min-h-2/5 fixed  bg-lightgrey rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-montserrat text-3xl font-semibold italic">
            Modification d'une activité
          </span>
          <button
            onClick={() => {
              setActivityId(null);
              setModalType(null);
              console.log(id);
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
                htmlFor="title"
                className="font-hind text-xl font-semibold"
              >
                Titre
              </label>
            </div>
            <input
              type="text"
              placeholder="Entrez le titre de votre activité"
              id="title"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col mb-4">
            <div className="label">
              <label
                htmlFor="photo"
                className="font-hind text-xl font-semibold"
              >
                Photo (une seule)
              </label>
            </div>
            <input
              type="file"
              placeholder="Ajoutez une photo"
              id="photo"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col mb-4">
            <div className="label">
              <label
                htmlFor="description"
                className="font-hind text-xl font-semibold"
              >
                Description
              </label>
            </div>
            <input
              type="text"
              placeholder="Entrez la description de votre activité"
              id="title"
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success text-base text-white mt-4 w-1/4 mx-auto"
            onClick={handlerRegister}
          >
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalEditActivity;
