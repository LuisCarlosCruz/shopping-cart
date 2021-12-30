import Header from "../src/componentes/header/Header";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <Header />
    </Provider>
  );
}

export default App;
