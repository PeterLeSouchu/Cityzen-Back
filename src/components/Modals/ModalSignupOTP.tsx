import axios from 'axios';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { isLogged } from '../../store/reducers/profileReducer';

interface ModalSignupOTPProps {
  setModalSignupOTP: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalSignupOTP({ setModalSignupOTP }: ModalSignupOTPProps) {
  const dispatch = useAppDispatch();
  const [code, setCode] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  async function handlerRegister(e: React.FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/signup/confirmation',
        code
      );
      if (res.status === 400) {
        console.log(res.data.error);
        setErrorMessage(res.data.error);
      }
      dispatch(isLogged());
      setCode('');
      setModalSignupOTP(false);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function handlerCode(event: React.ChangeEvent<HTMLInputElement>): void {
    setCode(event.target.value);
  }

  return (
    <div className=" absolute  w-screen flex justify-center items-center h-screen left-0 top-0">
      <div className="z-50 w-2/5 h-2/5 fixed  bg-gray-300 rounded-md p-4">
        <button
          onClick={() => {
            setModalSignupOTP(false);
          }}
          type="button"
          className="w-full text-right"
        >
          Close
        </button>
        <form className="flex flex-col">
          <div className="flex flex-col">
            {errorMessage ? <p>{errorMessage}</p> : null}
            <label htmlFor="otp">
              Entrez le code OTP que vous avez recu par mail
            </label>
            <input
              value={code}
              onChange={handlerCode}
              type="text"
              placeholder="Entrez votre code OTP"
              id="otp"
            />
          </div>
          <button type="submit" onSubmit={(e) => handlerRegister(e)}>
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalSignupOTP;
