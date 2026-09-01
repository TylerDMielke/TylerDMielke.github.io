import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HappyBirthdaySpub from './hbd_spub/HappyBirthdaySpub';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hbd-spub" component={HappyBirthdaySpub} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
