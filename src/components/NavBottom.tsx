import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faUser,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

function NavBottom() {
  return (
    <nav className="flex justify-around items-center bg-lightgrey md:hidden fixed bottom-0 left-0 right-0 h-16">
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
              <a>S'inscrire</a>
            </li>
            <li>
              <a>Se connecter</a>
            </li>
          </ul>
        </div>
      </button>
      <a href="">
        <FontAwesomeIcon icon={faHouse} className="h-8" />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faCircleInfo} className="h-8" />
      </a>
    </nav>
  );
}
export default NavBottom;
