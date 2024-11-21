import { useState, useEffect } from "react";

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
      setLoading(false);
    } catch (error) {
      console.error(
        "An error occurred during the fetching of the characters: ",
        error
      );
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
    <div className="bg-burgundy min-h-screen p-4">
      <h1 className="text-4xl font-harrypotter text-gold text-center mb-6">
        The Characters: {" "}
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a character ... "
          className="border-2 border-burgundy rounded-md p-2 w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="loader border-t-4 border-b-4 border-gold rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : characters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCharacters.map((character, index) => (
            <div
              key={index}
              className="bg-[#fdf5e6] shadow-lg border-2 border-[#740001] rounded-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl animate-fade-in"
            >
              <img
                src={character.image || "https://via.placeholder.com/150"}
                alt={`${character.name}`}
                className="w-24 h-24 rounded-full object-cover border-4 border-gold mb-4"
              />
              <h2 className="font-bold text-lg text-center text-[#740001]">
                {character.name}
              </h2>
              <p className="text-gray-700 text-center italic">
                {character.species}
              </p>
              <p className="text-gray-700 text-center italic">
                {character.gender}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No character found</p>
      )}
    </div>
  );
}

export default Characters;
