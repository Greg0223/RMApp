import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
export type TypeCharacter = { id: number; name: string };

const Episode = ({ theOtherSearchValue, apiprop, page }) => {
  const [cardCharacter, setCardCharacter] = useState<{
    results: TypeCharacter[];
  }>();
  useEffect(() => {
    const apiCall = (item: string, page: number) => {
      fetch("https://rickandmortyapi.com/api/" + item + "?page=" + page)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("hi");
          setCardCharacter(data);
          typeof cardCharacter;
        });
    };
    apiCall(apiprop, page);
  }, [page]);

  return (
    <div className="type-flex">
      {cardCharacter?.results
        .filter((meIsTheKey) => {
          return meIsTheKey.name
            .toLocaleLowerCase()
            .includes(theOtherSearchValue.toLocaleLowerCase());
        })
        .map((otroyo) => {
          return (
            <div className="card">
              <div className="tag">
                <span>Name:</span> <span>{otroyo?.name}</span>{" "}
              </div>
              <div className="tag">
                <span>Episode:</span> <span>{otroyo?.episode}</span>{" "}
              </div>
              <div className="tag">
                <span>Air Date:</span> <span>{otroyo?.air_date}</span>{" "}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Episode;
