interface ModalDeleteActivityProps {
  setModalType: React.Dispatch<React.SetStateAction<'edit' | 'delete' | null>>;
  setActivityId: React.Dispatch<React.SetStateAction<number | null>>;
  id: number;
}

function ModalDeleteActivity({
  setModalType,
  setActivityId,
  id,
}: ModalDeleteActivityProps) {
  function handlerDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setActivityId(null);
    setModalType(null);
    console.log(id);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setActivityId(null);
            setModalType(null);
            console.log(id);
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
