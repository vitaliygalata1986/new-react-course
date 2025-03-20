import ControlledForm from '../components/ControlledForm/ControlledForm';
import UnControlledForm from '../components/UnControlledForm/UnControlledForm';
import MixedForm from './MixedForm';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <ControlledForm />
      <UnControlledForm />
      <MixedForm />
    </div>
  );
}

export default HomePage;
