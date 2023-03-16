import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
export type TypeCharacter = { id: number; name: string };

const Episode = ({ prop4, theOtherSearchValue}: { prop3: { results: TypeCharacter } }) => {
  const [cardCharacter, setCardCharacter] = useState<{
    results: TypeCharacter;
  }>();
  const card = prop4;

  return (
    <div>
      {card.results.filter((meIsTheKey) => {
        return (meIsTheKey.name.toLocaleLowerCase().includes(theOtherSearchValue.toLocaleLowerCase()))
      }).map((otroyo) => {
        return (
          <div className="card">
            <div className="tag">
              <span>Name:</span>{" "}
              <span>{ otroyo?.name}</span>{" "}
            </div>
            <div className="tag">
              <span>Episode:</span>{" "}
              <span>{ otroyo?.episode}</span>{" "}
            </div>
            <div className="tag">
              <span>Air Date:</span>{" "}
              <span>{ otroyo?.air_date}</span>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Episode;
