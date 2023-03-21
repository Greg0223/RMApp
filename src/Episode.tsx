import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
export type TypeCharacter = { id: number; name: string, episode:string, air_date:string };

const Episode = ({ theOtherSearchValue, apiprop, page, maxPages }:
  {
    theOtherSearchValue:string;
    apiprop: string;
    page: number;
    maxPages: (X:number) => void;

  }) => {
  const [cardCharacter, setCardCharacter] = useState<{
    results: TypeCharacter[];
  }>();
  const [errorMaxPage, setErrorMaxPage] = useState(0);

  useEffect(() => {
    const apiCall = (item: string, page: number) => {
      fetch("https://rickandmortyapi.com/api/" + item + "?page=" + page)
        .then((response) => {
          if (response.status != 200) {
            throw new Error();
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log("hi");
          setCardCharacter(data);
          maxPages(data.info.pages);
          setErrorMaxPage(0);
        })
        .catch(() => {
          setErrorMaxPage(1);
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
        </>
      )}
    </div>
  );
};

export default Episode;
