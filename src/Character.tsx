import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
export type TypeCharacter = { id: number; name: string, species:string, status:string, gender:string, image:string };

const Character = ({
  page,
  searchValue,
  apiprop,
  maxPages,
}: {
  page: number;
  searchValue: string;
  apiprop: string;
  maxPages: (X:number) => void;
}) => {
  const [cardCharacter, setCardCharacter] = useState<{
    results: TypeCharacter[];
  }>();
  const [errorMaxPage, seterrorMaxPage] = useState(0);

  useEffect(() => {
    const apiCall = (item: string, page: number) => {
      fetch("https://rickandmortyapi.com/api/" + item + "?page=" + page)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error();
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log("hi");
          setCardCharacter((lklkjljklk) => data);
          maxPages(data.info.pages);
          seterrorMaxPage(0);
        })
        .catch(() => {
          seterrorMaxPage(1);
        });
    };

    apiCall(apiprop, page);
  }, [page]);

  return (
    <div className="type-flex">
      {errorMaxPage == 1 ? (
        <div> </div>
      ) : (
        <>
          {cardCharacter?.results
            ?.filter((filterCharacter) => {
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
      )}
    </div>
  );
};

export default Character;
