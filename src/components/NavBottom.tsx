import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faCircleInfo,
  faUser,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import ModalSignin from './Modals/ModalSignin';
import ModalSignup from './Modals/ModalSignup';
import { useAppSelector } from '../hooks/redux';

function NavBottom() {
  const logged = useAppSelector((store) => store.profile.logged);
  return (
    <nav className="flex justify-around items-center bg-lightgrey md:hidden fixed bottom-0 left-0 right-0 h-7 z-50">
      <button type="button">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn m-1">
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
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      document.getElementById('my_modal_3').showModal()
                    }
                  >
                    Inscription
                  </button>
                  <dialog id="my_modal_3" className="modal relative">
                    <div className="modal-box absolute">
                      <ModalSignup />
                    </div>
                  </dialog>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      document.getElementById('my_modal_4').showModal()
                    }
                  >
                    Connexion
                  </button>
                  <dialog id="my_modal_4" className="modal relative">
                    <div className="modal-box absolute">
                      <ModalSignin />
                    </div>
                  </dialog>
                </li>
              </>
            )}
          </ul>
        </div>
      </button>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="h-8" />
      </Link>
      <Link to="/about">
        <FontAwesomeIcon icon={faCircleInfo} className="h-8" />
      </Link>
    </nav>
  );
}
export default NavBottom;
