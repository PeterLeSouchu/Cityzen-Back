import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <header>
      <nav className="w-screen flex justify-between p-2.5 bg-green h-16">
        <img className=" w-20 sm:w-20 md:w-24 " src={logo} alt="logo-site" />

        <form className="w-full md:w-1/2 flex justify-center bg-whiteP rounded-md h-full items-center">
          <input
            type="text"
            placeholder="Pays"
            className="rounded-l w-1/2 p-2 Class
      Properties
      outline-none"
          />
          <span className="text-grey flex justify-center items-center h-16">
            |
          </span>
          <input
            type="text"
            placeholder="Ville"
            className="rounded-r w-1/2 p-2 Class
      Properties
      outline-none"
          />
          <button type="submit" className="bg-slate-300 rounded-r-md ml-2 p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6" />
          </button>
        </form>
        <div className="justify-between items-center hidden md:flex">
          <a href="#" className="w-16">
            <FontAwesomeIcon icon={faCircleInfo} className="h-8" />
          </a>
          <a href="#">
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
              </ul>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;
