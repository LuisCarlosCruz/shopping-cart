import LoginPage from './pages/LoginPage';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
