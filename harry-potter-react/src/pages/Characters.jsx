import { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  //console.log(characters);
  const [loading, setLoading] = useState(true);
  const url = "https://hp-api.herokuapp.com/api/characters";

  const fetchCharacters = async () => {
    try {
      const response = await fetch(url);
      const details = await response.json();
      setCharacters(details);
      setLoading(false);
    } catch (error) {
      console.error(
        "an error occurred during the fetching of the characters: ",
        error
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>The Characters: </h1>
      {loading ? (
        <p>Loading ... </p>
      ) : characters.length > 0 ? (
        <ul
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          {characters.map((character, index) => {
            return (
              <li
                key={index}
                style={{
                  color: "black",
                  fontSize: "1rem",
                  margin: "0.5rem 0",
                  border: "1px solid #ccc",
                  padding: "0.5rem",
                }}
              >
                {character.name}
                <li>
                    {character.species}
                </li>
                <li>
                    {character.gender}
                </li>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>no character found</p>
      )}
    </div>
  );
}

export default Characters;
