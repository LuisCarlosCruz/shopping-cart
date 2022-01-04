import Login from './pages/Login';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/details/:id" component={Details} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
