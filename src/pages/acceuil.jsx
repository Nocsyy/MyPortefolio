import Presentation from '../components/presentation/presentation';
import Navigation from '../components/navigation/navigation';
import Realisation from '../components/réalisation/réalisation';
import Form from '../components/formulaire/formulaire';
import Footer from '../components/footer/footer';

function Acceuil() {
  return (
    <div>
      <body>
        <Presentation />
        <Realisation />
        <Form />
      </body>
    </div>
  );
}

export default Acceuil;
