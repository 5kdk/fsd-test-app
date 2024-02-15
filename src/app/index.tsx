import { withProviders } from './providers';
import { Routing } from 'page';
import './index.scss';

const App = () => {
  return <Routing />;
};

export default withProviders(App);
