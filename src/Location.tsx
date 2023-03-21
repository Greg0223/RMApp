import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "./Container";
export type TypeCharacter  = { id: number; name: string, type: string, dimension:string };

const Location = ({
  page,
  anotherSearchValue,
  apiprop,
  maxPages,
}: {
  page: number;
  anotherSearchValue: string;
  apiprop: string;
  maxPages: (X: number) => void;
}) => {
  const [cardCharacter, setCardCharacter] = useState<{
    results: TypeCharacter[];
  }>();
  const [errorMaxPage, setErrorMaxPage] = useState(0);

  useEffect(() => {
    const apiCall = (item: string) => {
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
    apiCall(apiprop);
  }, [page]);

  return (
    <div className="type-flex">
      {errorMaxPage == 1 ? (
        <div> </div>
      ) : (
        <>
          {cardCharacter?.results.filter((whatYouLooking4) => {
              return whatYouLooking4.name
                .toLocaleLowerCase()
                .includes(anotherSearchValue.toLocaleLowerCase());
            })
            .map((yo) => {
              return (
                <div className="card">
                  <div className="tag">
                    <span>Name:</span> <span>{yo.name}</span>{" "}
                  </div>
                  <div className="tag">
                    <span>Type:</span> <span>{yo.type}</span>{" "}
                  </div>
                  <div className="tag">
                    <span>Dimension:</span> <span>{yo.dimension}</span>{" "}
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default Location;
