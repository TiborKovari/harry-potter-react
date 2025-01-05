import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterPresentation from "../components/CharacterPresentation";
import Loader from "../components/Loader";

function CharacterDetails() {
  const param = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = (id) => `https://hp-api.herokuapp.com/api/character/${id}`;

  const fetchCharacter = async () => {
    if (!param.id) return;
    try {
      const result = await fetch(url(param.id));
      const details = await result.json();
      setCharacter(details);
    } catch (error) {
      console.error("fetching was not possible due to: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchCharacter();
    }
  }, [param.id]);

  return (
    <div className="p-8">
      {loading ? (
        <Loader />
      ) : (
        character && <CharacterPresentation character={character[0].id}/>
      )}
    </div>
  );
}

export default CharacterDetails;
