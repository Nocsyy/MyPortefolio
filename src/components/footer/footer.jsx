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
      <Link to='politique_de_confidentialite'>
        <a href='#' style={{ color: 'black' }}>
          Politique de confidentienlité
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
