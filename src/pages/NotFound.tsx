import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import header from '../components/Header';

function NotFound() {
  const error = useRouteError();
  console.error(error);

  function getErrorMessage(e: unknown): string {
    if (isRouteErrorResponse(e)) {
      console.log(e.data);
      return e.statusText;
    }
    if (e instanceof Error) {
      return e.message;
    }
    if (typeof e === 'string') {
      return e;
    }

    return 'Unknown error';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-9xl font-montserrat text-blue-500">404</h1>
        <p className="text-lg font-montserrat text-gray-600 mt-2">
          Désolé, nous n'avons pas pu trouver la page que vous recherchez.
        </p>
        <p className="text-md text-gray-500 mt-4">
          <i>{getErrorMessage(error)}</i>
        </p>
        <a
          href="/"
          className="bg-green mt-10 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

export default NotFound;
