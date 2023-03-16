import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from './Container'



const App = () => {
  const [card, setCard] = useState([]);
  const [statetest, setStateTest] = useState([]);
  
  return (
    <div className="App">
      <Container
      prop1={1} 
      />
    
    </div>

  );
}

export default App
