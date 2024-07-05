import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  faMagnifyingGlass,
  faCircleInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useAppSelector } from '../hooks/redux';
import ModalSignup from './Modals/ModalSignup';
import ModalSignin from './Modals/ModalSignin';
import logo from '../assets/logo.png';

function Header() {
  // Pas besoin de déclarer ces 2 states dans le store étant donné qu'ils ne servent que dans ce composant, autant se simplifier la tâche et les mettre en local avec le hook useState.
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [countrySuggestions, setCountrySuggestions] = useState('');
  const [citySuggestions, setCitySuggestions] = useState('');
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
        'https://nominatim.openstreetmap.org/search',
        {
          params: {
            q: inputValue,
            format: 'json',
            limit: 3,
          },
        }
      );

      const suggestions = response.data
        .filter((item) => item.addresstype === 'country')
        .map((item) => ({
          name: item.name,
          lat: item.lat,
          lon: item.lon,
        }));

      console.log(response.data);

      setCountrySuggestions(suggestions);
    } catch (error) {
      console.error(error);
      setCountrySuggestions([]);
    }
  }

  const changeCountryInput = (searchTerm) => {
    setCountry(searchTerm);
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
        'https://nominatim.openstreetmap.org/search',
        {
          params: {
            q: inputValue,
            format: 'json',
            limit: 3,
          },
        }
      );

      const suggestions = response.data
        .filter((item) => item.addresstype === 'city')
        .map((item) => ({
          name: item.name,
          lat: item.lat,
          lon: item.lon,
        }));

      console.log(response.data);

      setCitySuggestions(suggestions);
    } catch (error) {
      console.error(error);
      setCitySuggestions([]);
    }
  }

  const changeCityInput = (searchTerm) => {
    setCity(searchTerm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header className="flex items-center w-screen bg-green h-10 px-5 min-h-16">
      <nav className="flex justify-between items-center w-screen">
        <Link to="/">
          <img className="h-16" src={logo} alt="logo-site" />
        </Link>

        <form
          className="h-12 w-full md:w-1/2 flex justify-center bg-whiteP rounded-md items-center"
          onSubmit={handleFormSubmit}
        >
          <input
            onChange={handlerChangeCountry}
            value={country}
            type="text"
            placeholder="Pays"
            className="rounded-l w-1/2 p-2 
      outline-none"
          />
          {countrySuggestions.length > 0 && (
            <div className="join join-vertical mt-20">
              {countrySuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="btn bg-lightgrey join-item"
                  onClick={() => changeCountryInput(suggestion.name)}
                >
                  {suggestion.name}
                </button>
              ))}
            </div>
          )}
          <span className="text-grey flex justify-center items-center h-16">
            |
          </span>
          <input
            onChange={handlerChangeCity}
            value={city}
            type="text"
            placeholder="Ville"
            className="rounded-r w-1/2 p-2 
      outline-none"
          />
          {citySuggestions.length > 0 && (
            <div className="join join-vertical mt-20">
              {citySuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="btn bg-lightgrey join-item"
                  onClick={() => changeCityInput(suggestion.name)}
                >
                  {suggestion.name}
                </button>
              ))}
            </div>
          )}
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
