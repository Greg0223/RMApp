import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [card, setCard] = useState([]);
  const [statetest, setStateTest] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Container prop1={1} />
      </div>
    </BrowserRouter>
  );
};

export default App;
