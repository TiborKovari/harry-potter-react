import { useState, useEffect } from "react";

function Spells() {
  const [loading, setLoading] = useState(true);
  const [spells, setSpells] = useState([]);
  const [search, setSearch] = useState("");
  const url = "https://hp-api.herokuapp.com/api/spells";

  const fetchSpells = async () => {
    try {
      const result = await fetch(url);
      const allSpells = await result.json();
      setSpells(allSpells);
      setLoading(false);
    } catch (error) {
      console.error("the spells couldn't be read because of :", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpells();
  }, []);

  const filteredSpells = search
    ? spells.filter((spell) =>
        spell.name.toLowerCase().includes(search.toLowerCase())
      )
    : spells;

  return (
    <div className="p-6 bg-writing opacity-80 min-h-screen">
      <h1 className="text-4xl font-serif font-bold text-burgundy text-center mb-6">
        The Spells:{" "}
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a spell ... "
          className="opacity-65 border-2 font-bold border-burgundy rounded-md p-2 w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="loader border-t-4 border-b-4 border-gold rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr animate-fade-in">
          {filteredSpells.map((spell) => (
            <div key={spell.id}
            className="bg-parchment opacity-86 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 h-full fel flex-col items-center justify-between text-center"            
            >
              <h2 className="text-3xl font-bold text-burgundy">{spell.name}</h2>
              <p className="text-gray-900 font-bold">{spell.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Spells;
