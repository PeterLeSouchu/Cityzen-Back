import axios from 'axios';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { getFavorites, login } from '../../store/reducers/profileReducer';

interface ModalSigninProps {
  setModalSignin: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalSignin({ setModalSignin }: ModalSigninProps) {
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
      setModalSignin(false);
    } catch (error) {
      console.log(error);
      setErrorMessage('Les identifiants ne correspondent pas');
    }
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalSignin(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form onSubmit={(e) => handlerRegister(e)} className="flex flex-col">
          {errorMessage ? <p>{errorMessage}</p> : null}
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => handlerEmail(e)}
              type="text"
              placeholder="Entrez votre adresse mail"
              id="email="
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Mot de passe</label>
            <input
              value={password}
              onChange={(e) => handlerPassword(e)}
              type="password"
              placeholder="Entrez votre mot de passe"
              id="password"
            />
          </div>
          <button type="submit">Confirmer</button>
        </form>
      </div>
    </div>
  );
}

export default ModalSignin;
