import { useState, useEffect } from "react";
import Loader from "./Loader";
import randomWizard from "../assets/images/randomWizard.jpg";

function CharacterPresentation({ character }) {
  const [loading, setLoading] = useState(true);
  const [characterDetails, setCharacterDetails] = useState(null);

  const url = `https://hp-api.herokuapp.com/api/character/${character}`;

  const fetchCharacter = async () => {
    try {
      const result = await fetch(url);
      const details = await result.json();
      setCharacterDetails(details[0]);
    } catch (error) {
      console.error("an error occurred while fetching: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-parchment min-h-screen">
      <h1 className="flex justify-center font-bold font-cinzel text-burgundy text-shadow text-3xl p-6">
        Character Details
      </h1>
      {
        <div className="flex flex-col items-center">
          <img
            src={characterDetails.image || randomWizard}
            alt={characterDetails.name}
            className="w-60 h-60 rounded-full object-cover border-4 border-gold mb-4"
          />
          <h2 className="p-3 text-2xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">Name: </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.name}
            </span>
          </h2>
          <p className="p-2 text-2xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">
              Species:{" "}
            </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.species}
            </span>
          </p>
          <p className="p-2 text-xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">
              Gender:{" "}
            </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.gender}
            </span>
          </p>
          <p className="p-2 text-xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">
              House:{" "}
            </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.house}
            </span>
          </p>
          <p className="p-2 text-xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">
              Date of Birth:{" "}
            </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.dateOfBirth}
            </span>
          </p>
          <p className="p-2 text-xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">
              Patronus:{" "}
            </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.patronus}
            </span>
          </p>
          <p className="p-2 text-xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">Wand: </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.wand.core}
            </span>
          </p>
          <p className="p-2 text-xl font-cinzel">
            <span className="text-burgundy opacity-55 text-shadow">
              Ancestry:{" "}
            </span>
            <span className="text-burgundy font-bold text-shadow">
              {characterDetails.ancestry}
            </span>
          </p>
        </div>
      }
    </div>
  );
}

export default CharacterPresentation;
