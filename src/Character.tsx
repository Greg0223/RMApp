import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
export type TypeCharacter = { id: number; name: string };

const Character = ({
  prop2,
  searchValue,
  apiprop,
}: {
  prop2: { results: TypeCharacter[] };
  searchValue: string;
  apiprop: string;
}) => {
  const [cardCharacter, setCardCharacter] = useState<{
    results: TypeCharacter;
  }>();

  useEffect(() => {
    const apiCall = (item: string) => {
      fetch("https://rickandmortyapi.com/api/" + item)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("hi");
          setCardCharacter(data);
          typeof cardCharacter;
        });
    };
    apiCall(apiprop);
  }, []);

  return (
    <div className="type-flex">
      <>
        {cardCharacter?.results
          .filter((filterCharacter) => {
            return filterCharacter.name
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase());
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
