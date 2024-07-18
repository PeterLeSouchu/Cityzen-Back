import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="sticky footer footer-center bg-blue/50 text-black p-4 min-h-7 md:h-7 z-40 ">
      <aside className="flex justify-center items-center md:flex-row flex-col w-2/3">
        <p>
          Copyright © {new Date().getFullYear()} - CityZen - Tous droits
          réservés
        </p>
        <Link to="/legal-notices" className="underline">
          Mention légales
        </Link>
      </aside>
    </footer>
  );
}

export default Footer;
