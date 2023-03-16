import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
export type TypeCharacter = { id: number; name: string };

const Character = ({
  prop2,
  searchValue,
}: {
  prop2: { results: TypeCharacter[] };
}) => {
  const [cardCharacter, setCardCharacter] = useState<{
    results: TypeCharacter;
  }>();
  const card = prop2;

  return (
    <div className="type-flex">
      <>
        {card?.results
          .filter((filterCharacter) => {
            return filterCharacter.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
          })
          .map((character) => {
            return (
              <div className="card">
                <div className="tag">
                  <span>Name:</span> <span>{character.name}</span>{" "}
                </div>
                <div className="tag">
                  <span>State:</span> <span>{character.status}</span>{" "}
                </div>
                <div className="tag">
                  <span>Species:</span> <span>{character.species}</span>{" "}
                </div>
                <div className="tag">
                  <span>Gender:</span> <span>{character.gender}</span>{" "}
                </div>
                <img className="img" src={character.image} />
              </div>
            );
          })}
      </>
    </div>
  );
};

export default Character;
