import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

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
    <div className="not-found">
      <h1>404</h1>
      <p>Désolé, une erreur inattendue est survenue.</p>
      <p>
        <i>{getErrorMessage(error)}</i>
      </p>
    </div>
  );
}

export default NotFound;
