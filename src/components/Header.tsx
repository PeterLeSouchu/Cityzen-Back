import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  faMagnifyingGlass,
  faCircleInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import ModalSignup from './Modals/ModalSignup';
import ModalSignin from './Modals/ModalSignin';
import logo from '../assets/logo.png';
import { fetchActivitiesByCountryCity } from '../store/reducers/activitiesReducer';
import ModalSignupOTP from './Modals/ModalSignupOTP';
import { logout } from '../store/reducers/profileReducer';

function Header() {
  const [modalSignup, setModalSignup] = useState(false);
  const [modalSignin, setModalSignin] = useState(false);
  const [modalSignupOTP, setModalSignupOTP] = useState(false);

  const notify = () => {
    if (modalSignin) {
      toast.success('Connexion réussie', {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    } else {
      toast.success('Inscription réussie', {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    }
  };

  const location = useLocation();
  // Pas besoin de déclarer ces 2 states dans le store étant donné qu'ils ne servent que dans ce composant, autant se simplifier la tâche et les mettre en local avec le hook useState.
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [citySuggestions, setCitySuggestions] = useState([]);

  const logged = useAppSelector((store) => store.profile.logged);

  // Fonction pour controller l'input pays, en mettant ca valeur dans le state "country"
  async function handlerChangeCountry(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const inputValue = event.target.value;
    setCountry(inputValue);

    try {
      if (inputValue.trim() === '') {
        setCountrySuggestions([]);
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/country/${inputValue}`
      );

      const suggestions = response.data.map((suggestedCountry) => ({
        id: suggestedCountry.id,
        name: suggestedCountry.name,
      }));

      setCountrySuggestions(suggestions);
    } catch (error) {
      console.error(error);
      setCountrySuggestions([]);
    }
  }

  const changeCountryInput = (searchTerm: string) => {
    setCountry(searchTerm);
    setCountrySuggestions([]);
  };

  // Fonction pour controller l'input ville, en mettant ca valeur dans le state "city"
  async function handlerChangeCity(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setCity(inputValue);

    try {
      if (inputValue.trim() === '') {
        setCitySuggestions([]);
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/city/${inputValue}`
      );

      const suggestions = response.data.map((suggestedCity) => ({
        id: suggestedCity.id,
        name: suggestedCity.name,
      }));

      setCitySuggestions(suggestions);
    } catch (error) {
      console.error(error);
      setCitySuggestions([]);
    }
  }

  const changeCityInput = (searchTerm: string) => {
    setCity(searchTerm);
    setCitySuggestions([]);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fetchData = async () => {
      try {
        await dispatch(fetchActivitiesByCountryCity({ country, city }));

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

  function handlerSingup(): void {
    setModalSignup((modal) => !modal);
    setModalSignin(false);
  }
  function handlerSingin(): void {
    setModalSignin((modal) => !modal);
    setModalSignup(false);
  }

  function handlerLogout(): void {
    dispatch(logout());
  }

  return (
    <header className="flex items-center w-screen bg-green h-10 px-5">
      <nav className="flex justify-between items-center w-screen">
        <Link to="/" className="bg-white rounded-md md:p-1 ">
          <img className="h-12" src={logo} alt="logo-site" />
        </Link>

        <form
          className="h-12 w-3/4 md:w-1/2 bg-whiteP rounded-md items-center"
          onSubmit={(event) => handleFormSubmit(event)}
        >
          <div className="flex flex-row h-full">
            <div className="w-1/2">
              <input
                required
                onChange={handlerChangeCountry}
                value={country}
                type="text"
                placeholder="Pays"
                className="h-full rounded-l w-full p-2 
      outline-none"
              />
              {countrySuggestions.length > 0 && (
                <div className="relative flex flex-col z-10">
                  {countrySuggestions.map((suggestion, index) => (
                    <button
                      type="button"
                      key={index}
                      className="btn"
                      onClick={() => changeCountryInput(suggestion.name)}
                    >
                      {suggestion.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="text-grey flex items-center">|</span>
            <div className="w-1/2">
              <input
                required
                onChange={handlerChangeCity}
                value={city}
                type="text"
                placeholder="Ville"
                className="h-full rounded-l w-full p-2 
      outline-none"
              />
              {citySuggestions.length > 0 && (
                <div className="relative flex flex-col z-10">
                  {citySuggestions.map((suggestion, index) => (
                    <button
                      type="button"
                      key={index}
                      className="btn"
                      onClick={() => changeCityInput(suggestion.name)}
                    >
                      {suggestion.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button type="submit" className="rounded-r-md ml-2 p-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6" />
            </button>
          </div>
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
                      <Link onClick={handlerLogout} to="/">
                        Se déconnecter
                      </Link>
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
        </div>
      </nav>
      {modalSignup ? (
        <ModalSignup
          setModalSignup={setModalSignup}
          setModalSignupOTP={setModalSignupOTP}
        />
      ) : null}
      {modalSignin ? (
        <ModalSignin notify={notify} setModalSignin={setModalSignin} />
      ) : null}
      {modalSignupOTP ? (
        <ModalSignupOTP notify={notify} setModalSignupOTP={setModalSignupOTP} />
      ) : null}
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </header>
  );
}
export default Header;
