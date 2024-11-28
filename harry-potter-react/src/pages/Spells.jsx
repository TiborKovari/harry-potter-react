import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import SpellGrid from "../components/SpellGrid";

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
      <h1 className="text-4xl font-serif font-bold text-burgundy text-shadow text-center mb-6">
        The Spells:{" "}
      </h1>
      <SearchBar search={search} setSearch={setSearch} target={"spell"}/>
      {loading ? <Loader /> : <SpellGrid spells={filteredSpells} />}
    </div>
  );
}

export default Spells;
