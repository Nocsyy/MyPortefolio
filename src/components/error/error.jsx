import { Link } from 'react-router-dom';

export function Error() {
  return (
    <div className='ctn-error' style={{ height: '55vh' }}>
      <div className='error-404'>
        <h1>404</h1>
      </div>
      <div className='text-error'>
        <h5>Oups! La page que vous demandez n'existe pas.</h5>
      </div>
      <div className='lien-error'>
        <Link to={'/MyPortefolio'}>
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </div>
  );
}

export default Error;
