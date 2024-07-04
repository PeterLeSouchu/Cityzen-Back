import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faMagnifyingGlass,
  faCircleInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import ModalSignup from './Modals/ModalSignup';
import ModalSignin from './Modals/ModalSignin';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="flex items-center w-screen bg-green h-10 px-5 min-h-16">
      <nav className="flex justify-between items-center w-screen">
        <Link to="/">
          <img className="h-16" src={logo} alt="logo-site" />
        </Link>

        <form className="h-12 w-full md:w-1/2 flex justify-center bg-whiteP rounded-md items-center">
          <input
            type="text"
            placeholder="Pays"
            className="rounded-l w-1/2 p-2 
      outline-none"
          />
          <span className="text-grey flex justify-center items-center h-16">
            |
          </span>
          <input
            type="text"
            placeholder="Ville"
            className="rounded-r w-1/2 p-2 
      outline-none"
          />
          <button type="submit" className="rounded-r-md ml-2 p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6" />
          </button>
        </form>
        <div className="justify-between items-center hidden md:flex">
          <Link to="/about" className="w-16">
            <FontAwesomeIcon icon={faCircleInfo} className="h-8" />
          </Link>
          <div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
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
                <li>
                  <Link to="/profile">Mon profil</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
