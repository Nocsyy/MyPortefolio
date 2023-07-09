import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p> © Réalisé par Andy OZDEMIR</p>
      <Link to='/mention_legale'>
        <a href='#' style={{ color: 'black' }}>
          Mentions légales
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
