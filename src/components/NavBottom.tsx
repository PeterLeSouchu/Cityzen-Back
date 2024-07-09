import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faCircleInfo,
  faUser,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ModalSignin from './Modals/ModalSignin';
import ModalSignup from './Modals/ModalSignup';
import { useAppSelector } from '../hooks/redux';

function NavBottom() {
  const [modalSignup, setModalSignup] = useState(false);
  const [modalSignin, setModalSignin] = useState(false);

  function handlerSingup(): void {
    setModalSignup((modal) => !modal);
  }

  function handlerSingin(): void {
    setModalSignin((modal) => !modal);
  }

  const logged = useAppSelector((store) => store.profile.logged);

  return (
    <>
      {' '}
      <nav className="flex justify-around items-center bg-lightgrey md:hidden fixed bottom-0 left-0 right-0 h-7 z-50">
        <div>
          <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="btn">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
              {logged ? (
                <>
                  <li>
                    <Link to="/profile">Mon profil</Link>
                  </li>
                  <li>
                    <Link to="/">Se déconnecter</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button type="button" onClick={handlerSingup}>
                      Inscription
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={handlerSingin}>
                      Connexion
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <Link to="/">
          <FontAwesomeIcon icon={faHouse} className="h-8" />
        </Link>

        <Link to="/about">
          <FontAwesomeIcon icon={faCircleInfo} className="h-8" />
        </Link>
      </nav>
      {modalSignup ? <ModalSignup setModalSignup={setModalSignup} /> : null}
      {modalSignin ? <ModalSignin setModalSignin={setModalSignin} /> : null}
    </>
  );
}
export default NavBottom;
