interface ModalDeleteActivityProps {
  setModalDeleteActivity: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalDeleteActivity({
  setModalDeleteActivity,
}: ModalDeleteActivityProps) {
  function handlerDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setModalDeleteActivity(false);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalDeleteActivity(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <p>Voulez-vous vraiment supprimer cette activité ?</p>
        <button onClick={handlerDelete} type="button">
          Oui
        </button>
      </div>
    </div>
  );
}
export default ModalDeleteActivity;
