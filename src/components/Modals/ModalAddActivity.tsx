import axios from 'axios';
import { useEffect, useState } from 'react';
import { Activities } from '../../@types';

interface ModalAddActivityProps {
  setModalType: React.Dispatch<
    React.SetStateAction<'edit' | 'delete' | 'add' | null>
  >;
  setMyActivities: React.Dispatch<React.SetStateAction<Activities[]>>;
}

function ModalAddActivity({
  setModalType,
  setMyActivities,
}: ModalAddActivityProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');

  async function handlerRegister(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('city', city);

    try {
      const { data } = await axios.post(
        'http://localhost:3000/profil/activity',
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setMyActivities((prevItems) => [...prevItems, data.data[0]]);
      setModalType(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (image) {
      console.log('Image updated:', image);
    }
  }, [image]);

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
      <div className="z-50 w-2/5 min-w-80 min-h-2/5 fixed  bg-lightgrey rounded-md p-4 border-2 border-slate-300 ">
        <div className="flex justify-between items-center mb-4">
          <span className="font-montserrat text-3xl font-semibold italic">
            Ajout d'activité
          </span>
          <button
            onClick={() => {
              setModalType(null);
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
        <form onSubmit={(e) => handlerRegister(e)} className="flex flex-col">
          <div className="flex flex-col my-1">
            <label className="label" htmlFor="title">
              Titre
            </label>
            <input
              onChange={(e) => handlerTitle(e)}
              defaultValue={title}
              type="text"
              placeholder="Entrez le titre de votre activité"
              id="title"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="file">Photo (1 seule)</label>
            <input
              onChange={(e) => handlerImage(e)}
              type="file"
              placeholder="Ajouter une photo"
              id="file"
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="description">Description</label>
            <input
              onChange={(e) => handlerDescription(e)}
              defaultValue={description}
              type="text"
              placeholder="Entrez la description de votre activité"
              id="description"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input
              onChange={(e) => handlerPhone(e)}
              defaultValue={phone}
              type="text"
              placeholder="Entrez votre numéro de téléphone"
              id="phone"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="adress">Adresse postale</label>
            <input
              onChange={(e) => handlerAddress(e)}
              defaultValue={address}
              type="text"
              placeholder="Entrez votre adresse postable"
              id="adress"
              className="input input-bordered w-full"
              s
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="city">Ville</label>
            <input
              onChange={(e) => handlerCity(e)}
              defaultValue={city}
              type="text"
              placeholder="Entrez votre ville"
              id="city"
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success md:text-base text-sm text-white mt-4 w-1/4 mx-auto "
          >
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalAddActivity;
