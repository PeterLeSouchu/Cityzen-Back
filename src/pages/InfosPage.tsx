import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalPseudo from '../components/Modals/ModalPseudo';
import { useAppSelector } from '../hooks/redux';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InfosPage() {
  const credentials = useAppSelector((store) => store.profile.credentials);
  const [modalPseudo, setModalPseudo] = useState(false);
  function handlerPseudo(): void {
    setModalPseudo((modal) => !modal);
  }
  console.log(credentials.email);

  return (
    <>
      <div className="flex flex-col justify-between m-7 ">
        <label className="block text-gray-700">Pseudo</label>
        <div className="flex items-center space-x-2 font-montserrat mt-2">
          <input
            type="text"
            className="w-2/3 h-6 border rounded px-4 py-2  bg-whiteP"
            id="pseudo"
            disabled
            placeholder={credentials.pseudo}
          />
          <button
            onClick={handlerPseudo}
            type="button"
            className="ml-1 border rounded-btn px-4 py-2 hover:bg-gray-300 h-6 flex items-center"
          >
            <FontAwesomeIcon
              icon={faCirclePlus}
              className=" md:mr-2 text-green"
            />
            <span className="hidden md:inline ml-2">Modifier</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col m-7 font-montserrat">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          className="w-2/3 h-6 border rounded px-4 py-2 mt-2 bg-whiteP"
          id="email"
          disabled
          placeholder={credentials.email}
        />
      </div>

      <Link to="/" className="m-7 flex flex-col">
        Modifier mon mot de passe
      </Link>
      {modalPseudo ? <ModalPseudo setModalPseudo={setModalPseudo} /> : null}
    </>
  );
}
export default InfosPage;
