import Presentation from '../components/presentation/presentation';
import Navigation from '../components/navigation/navigation';
import Realisation from '../components/réalisation/réalisation';
import Form from '../components/formulaire/formulaire';
import Footer from '../components/footer/footer';
import Apropos from '../components/Apropos/apropos';
import '../index.css';

function Acceuil() {
  return (
    <body>
      <Presentation />
      <Apropos />
      <Realisation />
      <Form />
    </body>
  );
}

export default Acceuil;
