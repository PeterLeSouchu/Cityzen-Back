import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faCircleInfo,
  faUser,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import ModalSignin from './Modals/ModalSignin';
import ModalSignup from './Modals/ModalSignup';

function NavBottom() {
  return (
    <nav className="flex justify-around items-center bg-lightgrey md:hidden fixed bottom-0 left-0 right-0 h-7">
      <button type="button">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn m-1">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById('my_modal_5').showModal()
                }
              >
                Inscription
              </button>
              <dialog id="my_modal_5" className="modal modal-middle relative">
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
                  document.getElementById('my_modal_6').showModal()
                }
              >
                Connexion
              </button>
              <dialog id="my_modal_6" className="modal modal-middle relative">
                <div className="modal-box absolute">
                  <ModalSignin />
                </div>
              </dialog>
            </li>
            <li>
              <Link to="/profile">Mon profil</Link>
            </li>
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
