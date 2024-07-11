import axios from 'axios';
import { useState } from 'react';
import { Id } from 'react-toastify';
import { useAppDispatch } from '../../hooks/redux';
import { getFavorites, login } from '../../store/reducers/profileReducer';

interface ModalSigninProps {
  setModalSignin: React.Dispatch<React.SetStateAction<boolean>>;
  notify: () => Id;
}

function ModalSignin({ setModalSignin, notify }: ModalSigninProps) {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handlerEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handlerPassword(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  async function handlerRegister(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/signin',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      setEmail('');
      setPassword('');
      dispatch(login());
      dispatch(getFavorites());
      notify();
      setModalSignin(false);
    } catch (error) {
      console.log(error);
      setErrorMessage('Les identifiants ne correspondent pas');
    }
  }

  return (
    <div className="absolute w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 min-h-2/5 fixed  bg-lightgrey rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-montserrat text-3xl font-semibold italic">
            Connexion
          </span>
          <button
            onClick={() => {
              setModalSignin(false);
            }}
            type="button"
            className="btn btn-circle btn-outline"
          >
            <svg
              aria-label="close"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={(e) => handlerRegister(e)} className="flex flex-col">
          <div className="flex flex-col mb-4">
            {errorMessage ? (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errorMessage}</span>
              </div>
            ) : null}
            <div className="label">
              <label
                htmlFor="email"
                className="font-hind text-xl font-semibold"
              >
                Email
              </label>
            </div>
            <input
              value={email}
              onChange={(e) => handlerEmail(e)}
              type="text"
              placeholder="Entrez votre adresse email"
              id="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col mb-4">
            <div className="label">
              <label
                htmlFor="password"
                className="font-hind text-xl font-semibold"
              >
                Mot de passe
              </label>
            </div>
            <input
              value={password}
              onChange={(e) => handlerPassword(e)}
              type="password"
              placeholder="Entrez votre mot de passe"
              id="password"
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success text-base text-white mt-4 w-1/4 mx-auto"
          >
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalSignin;
