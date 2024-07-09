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

      await axios.post('http://localhost:3000/signup', userData);

      setPseudo('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setModalSignup(false);
      setModalSignupOTP(true);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function handlerPseudo(event: React.ChangeEvent<HTMLInputElement>): void {
    setPseudo(event.target.value);
  }

  function handlerEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handlerPassword(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }
  function handlerConfirmPassword(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPasswordConfirm(event.target.value);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalSignup(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form onSubmit={(e) => handlerRegister(e)} className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              value={pseudo}
              onChange={handlerPseudo}
              type="text"
              placeholder="Entrez votre pseudo"
              id="pseudo"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={handlerEmail}
              type="text"
              placeholder="Entrez votre adresse mail"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Mot de passe</label>
            <input
              value={password}
              onChange={handlerPassword}
              type="password"
              placeholder="Entrez votre mot de passe"
              id="password"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password-confirm">
              confirmation du mot de passe
            </label>
            <input
              value={passwordConfirm}
              onChange={handlerConfirmPassword}
              type="password"
              placeholder="Confirmer votre mot de passe"
              id="password-confirm"
            />
          </div>
          <button type="submit">Confirmer</button>
        </form>
      </div>
    </div>
  );
}
export default ModalSignup;
