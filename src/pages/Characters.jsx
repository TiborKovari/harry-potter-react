import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader"
import CharacterGrid from "../components/CharacterGrid";
import ErrorMessage from "../components/ErrorMessage";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const url = "https://hp-api.herokuapp.com/api/characters";

  const fetchCharacters = async () => {
    try {
      const response = await fetch(url);
      const details = await response.json();
      setCharacters(details);
    } catch (error) {
      console.error(
        "An error occurred during the fetching of the characters: ",
        error
      );
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredCharacters = search ? (
    characters.filter((oneCharacter)=>oneCharacter.name.toLowerCase().includes(search.toLowerCase()))
  ) : characters;

  return (
    <div className="bg-marble min-h-screen p-4">
      <h1 className="text-4xl font-serif text-burgundy text-center mb-6">
        The Characters: {" "}
      </h1>

      <SearchBar search={search} setSearch={setSearch} target={"character"}/>

      {loading ? (
        <Loader />
      ) : characters.length > 0 ? (
        <CharacterGrid characters={filteredCharacters}/>
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
}

export default Characters;
