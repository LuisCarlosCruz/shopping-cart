import LoginPage from './pages/LoginPage';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <LoginPage />
    </Provider>
  );
}

export default App;
