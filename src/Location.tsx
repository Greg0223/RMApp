import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from './Container'
export type TypeCharacter = { id: number; name: string };


const Location = ({prop3, anotherSearchValue} : {prop3:{results: TypeCharacter[]}}) => { 
  const [cardCharacter, setCardCharacter] = useState<{ results: TypeCharacter}>();
  const card = prop3;

  return(
    <div>
    {
        card?.results.filter((whatYouLooking4) => { return (whatYouLooking4.name.toLocaleLowerCase().includes(anotherSearchValue.toLocaleLowerCase()))}).map((yo) => {
            return (
                <div className="card">
      <div className="tag">
        <span>Name:</span>{" "}
        <span>{ yo.name}</span>{" "}
      </div>
      <div className="tag">
        <span>Type:</span>{" "}
        <span>{ yo.type}</span>{" "}
      </div>
      <div className="tag">
        <span>Dimension:</span>{" "}
        <span>{ yo.dimension}</span>{" "}
      </div>
    
    </div>

            );
        })
    }
    

  </div>

  );
}

export default Location; 