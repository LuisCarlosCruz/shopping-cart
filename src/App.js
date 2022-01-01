import Login from './pages/Login';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
