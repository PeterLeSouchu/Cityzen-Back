import { useState } from 'react';

interface ModalEditActivityProps {
  setModalType: React.Dispatch<
    React.SetStateAction<'edit' | 'delete' | 'add' | null>
  >;
  setActivityId: React.Dispatch<React.SetStateAction<number | null>>;
  id: number;
}

function ModalEditActivity({
  setModalType,
  setActivityId,
  id,
}: ModalEditActivityProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  function handlerRegister(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    console.log(id);
    console.log(title, description, image);
    setActivityId(null);
    setModalType(null);
  }

  function handlerDescription(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setDescription(event.target.value);
  }

  function handlerTitle(event: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  function handlerImage(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setImage(selectedFile);
    }
  }

  function handlerPhone(e: React.ChangeEvent<HTMLInputElement>): void {
    setPhone(e.target.value);
  }

  function handlerAddress(e: React.ChangeEvent<HTMLInputElement>): void {
    setAddress(e.target.value);
  }

  function handlerCity(e: React.ChangeEvent<HTMLInputElement>): void {
    setCity(e.target.value);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalType(null);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form onSubmit={handlerRegister} className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="title">Titre</label>
            <input
              onChange={(e) => handlerTitle(e)}
              defaultValue={title}
              type="text"
              placeholder="Entrez le titre de votre activité"
              id="title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="file">Photo (1 seule)</label>
            <input
              onChange={(e) => handlerImage(e)}
              type="file"
              placeholder="Ajouter une photo"
              id="file"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <input
              onChange={(e) => handlerDescription(e)}
              defaultValue={description}
              type="text"
              placeholder="Entrez la description de votre activité"
              id="description"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input
              onChange={(e) => handlerPhone(e)}
              defaultValue={phone}
              type="text"
              placeholder="Entrez votre numéro de téléphone"
              id="phone"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="adress">Adresse postale</label>
            <input
              onChange={(e) => handlerAddress(e)}
              defaultValue={address}
              type="text"
              placeholder="Entrez votre adresse postable"
              id="adress"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city">Ville</label>
            <input
              onChange={(e) => handlerCity(e)}
              defaultValue={city}
              type="text"
              placeholder="Entrez votre ville"
              id="city"
            />
          </div>
          <button type="submit">Confirmer</button>
        </form>
      </div>
    </div>
  );
}
export default ModalEditActivity;
