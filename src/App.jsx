import "./Reset.css";
import "./style.css";
import "./App.css";
import { useState } from "react";
import { WelcomePage } from "./Componentes/WelcomePage";
import { HomePage } from "./Componentes/HomePage";

function App() {
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  return (
    <div className="App">
      {isWelcomePage ? (
        <WelcomePage setIsWelcomePage={setIsWelcomePage} />
      ) : (
        <HomePage setIsWelcomePage={setIsWelcomePage} />
      )}
    </div>
  );
}

export default App;
