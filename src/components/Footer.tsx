function Footer() {
  return (
    <footer className="footer footer-center bg-blue/50 text-base-content text-black p-4 h-max">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - CityZen - Tous droits
          réservés
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
