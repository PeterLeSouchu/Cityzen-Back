import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  faMagnifyingGlass,
  faCircleInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import ModalSignup from './Modals/ModalSignup';
import ModalSignin from './Modals/ModalSignin';
import logo from '../assets/logo.png';
import { fecthActivitiesByCountryCity } from '../store/reducers/activitiesReducer';

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  // Pas besoin de déclarer ces 2 states dans le store étant donné qu'ils ne servent que dans ce composant, autant se simplifier la tâche et les mettre en local avec le hook useState.
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const logged = useAppSelector((store) => store.profile.logged);

  // Fonction pour controller l'input pays, en mettant ca valeur dans le state "country"
  function handlerChangeCountry(event: React.ChangeEvent<HTMLInputElement>) {
    setCountry(event.target.value);
  }
  // Fonction pour controller l'input ville, en mettant ca valeur dans le state "city"
  function handlerChangeCity(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleFormSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const fetchData = async () => {
      try {
        await dispatch(fecthActivitiesByCountryCity({ country, city }));

        // Si l'url est différente de '/activities' alors on redirige, cela évite les redirection inutile et améliore la performance.
        if (location.pathname !== '/activities') {
          navigate('/activities');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately, e.g., show a user-friendly message
      }
    };

    fetchData();
  }

  return (
    <header className="flex items-center w-screen bg-green h-10 px-5">
      <nav className="flex justify-between items-center w-screen">
        <Link to="/" className="bg-white rounded-md md:p-1 ">
          <img className="h-12" src={logo} alt="logo-site" />
        </Link>

        <form
          className="h-12 w-3/4 md:w-1/2 flex justify-center bg-whiteP rounded-md items-center"
          onSubmit={handleFormSubmit}
        >
          <input
            required
            onChange={handlerChangeCountry}
            value={country}
            type="text"
            placeholder="Pays"
            className="rounded-l w-1/2 p-2 
      outline-none"
          />
          <span className="text-grey flex justify-center items-center h-16">
            |
          </span>
          <input
            required
            onChange={handlerChangeCity}
            value={city}
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
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
