import "./Reset.css";
import "./style.css";
import "./App.css";
import { useState } from "react";
import { WelcomePage } from "./Componentes/WelcomePage";

function App() {
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  return (
    <div className="App">
      {isWelcomePage ? (
        <WelcomePage setIsWelcomePage={setIsWelcomePage} />
      ) : (
        <h1>Olá</h1>
      )}
    </div>
  );
}

export default App;
