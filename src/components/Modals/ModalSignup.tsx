import axios from 'axios';
import { useState } from 'react';

interface ModalSignupProps {
  setModalSignup: React.Dispatch<React.SetStateAction<boolean>>;
  setModalSignupOTP: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalSignup({ setModalSignup, setModalSignupOTP }: ModalSignupProps) {
  const [pseudo, setPseudo] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();

  async function handlerRegister(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setErrorMessage('');

    try {
      if (password !== passwordConfirm) {
        setErrorMessage('Les mots de passe ne correspondent pas');
        return;
      }

      const userData = {
        pseudo,
        email,
        password,
        passwordConfirm,
      };

      const res = await axios.post('http://localhost:3000/signup', userData, {
        withCredentials: true,
      });

      setPseudo('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setModalSignup(false);
      setModalSignupOTP(true);
      console.log(res.data);
    } catch (error) {
      console.error('There was an error!', error);
      setErrorMessage(error.response.data.error);
    }
  }

  function handlerPseudo(e: React.ChangeEvent<HTMLInputElement>): void {
    setPseudo(e.target.value);
  }

  function handlerEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }

  function handlerPassword(e: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }
  function handlerConfirmPassword(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPasswordConfirm(e.target.value);
  }

  return (
    <div className="absolute w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 min-h-2/5 fixed  bg-lightgrey rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-montserrat text-3xl font-semibold italic">
            Inscription
          </span>
          <button
            onClick={() => {
              setModalSignup(false);
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
            <div className="label">
              <label
                htmlFor="pseudo"
                className="font-hind text-xl font-semibold"
              >
                Pseudo
              </label>
            </div>
            <input
              value={pseudo}
              onChange={(e) => handlerPseudo(e)}
              type="text"
              placeholder="Entrez votre pseudo"
              id="pseudo"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col mb-4">
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
          <div className="flex flex-col mb-4">
            <div className="label">
              <label
                htmlFor="password-confirm"
                className="font-hind text-xl font-semibold"
              >
                Confirmation du mot de passe
              </label>
            </div>
            <input
              value={passwordConfirm}
              onChange={(e) => handlerConfirmPassword(e)}
              type="password"
              placeholder="Confirmez votre mot de passe"
              id="password-(e) => confirm"
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
export default ModalSignup;
