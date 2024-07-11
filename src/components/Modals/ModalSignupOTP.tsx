import axios from 'axios';
import { Id } from 'react-toastify';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { getFavorites, login } from '../../store/reducers/profileReducer';

interface ModalSignupOTPProps {
  setModalSignupOTP: React.Dispatch<React.SetStateAction<boolean>>;
  notify: () => Id;
}

function ModalSignupOTP({ setModalSignupOTP, notify }: ModalSignupOTPProps) {
  const dispatch = useAppDispatch();
  const [code, setCode] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function handlerRegister(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/signup/confirmation',
        { OTP: code },
        { withCredentials: true }
      );

      console.log(res.data);

      setErrorMessage('');
      dispatch(login());
      dispatch(getFavorites());
      setCode('');
      setModalSignupOTP(false);
      notify();
    } catch (error) {
      console.error('There was an error!', error);

      setErrorMessage('Les codes ne correspondent pas');
    }
  }

  function handlerCode(e: React.ChangeEvent<HTMLInputElement>): void {
    setCode(e.target.value);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 min-h-2/5 fixed  bg-lightgrey rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-montserrat text-3xl font-semibold italic">
            Validez l'inscription
          </span>
          <button
            onClick={() => {
              setModalSignupOTP(false);
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
              <label htmlFor="code" className="font-hind text-xl font-semibold">
                Entrez le code OTP que vous avez reçu par email
              </label>
            </div>
            <input
              value={code}
              onChange={(e) => handlerCode(e)}
              type="code"
              placeholder="Entrez le code OTP"
              id="code"
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
export default ModalSignupOTP;
