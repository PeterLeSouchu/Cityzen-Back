import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalPseudo from '../components/Modals/ModalPseudo';
import { useAppSelector } from '../hooks/redux';

function InfosPage() {
  const credentials = useAppSelector((store) => store.profile.credentials);
  const [modalPseudo, setModalPseudo] = useState(false);
  function handlerPseudo(): void {
    setModalPseudo((modal) => !modal);
  }
  console.log(credentials.email);

  return (
    <>
      <div className="flex flex-col justify-between m-7">
        <label htmlFor="pseudo">Peudo</label>
        <div className="flex justify-between">
          <input
            type="text"
            id="pseudo"
            disabled
            placeholder={credentials.pseudo}
          />
          <button onClick={handlerPseudo} type="button">
            Modifier
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between m-7">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          disabled
          placeholder={credentials.email}
        />
      </div>

      <Link to="/" className="m-7">
        Modifier mon mot de passe
      </Link>
      {modalPseudo ? <ModalPseudo setModalPseudo={setModalPseudo} /> : null}
    </>
  );
}
export default InfosPage;
