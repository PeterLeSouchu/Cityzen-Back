import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import {
  faCircleInfo,
  faUser,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import ModalSignin from './Modals/ModalSignin';
import ModalSignup from './Modals/ModalSignup';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logout } from '../store/reducers/profileReducer';
import ModalSignupOTP from './Modals/ModalSignupOTP';

function NavBottom() {
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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    navigate('/');
  }

  const logged = useAppSelector((store) => store.profile.logged);
  const pseudo = useAppSelector((store) => store.profile.credentials.pseudo);

  return (
    <>
      <nav className="flex justify-around items-center bg-lightgrey md:hidden fixed bottom-0 left-0 right-0 h-7 z-40">
        <div>
          <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="btn">
              {logged ? (
                <span> {pseudo.charAt(0).toLocaleUpperCase()}</span>
              ) : (
                <FontAwesomeIcon icon={faUser} />
              )}
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
              {logged ? (
                <>
                  <li>
                    <Link to="/profile">Mon profil</Link>
                  </li>
                  <li>
                    <button type="button" onClick={handlerLogout}>
                      Se déconnecter
                    </button>
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
      {/* {modalSignup ? (
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
      /> */}
    </>
  );
}
export default NavBottom;
