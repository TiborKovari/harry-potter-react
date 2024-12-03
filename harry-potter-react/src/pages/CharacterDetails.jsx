import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      console.log("details: ", details);
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
        character && <h1 className="flex justify-center">{character[0].name}</h1>
      )}
    </div>
  );
}

export default CharacterDetails;
