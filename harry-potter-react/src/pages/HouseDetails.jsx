import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import CharacterGrid from "../components/CharacterGrid";
import gryffindorLogo from "../assets/images/gryffindor.png";
import slytherinLogo from "../assets/images/slytherin.png";
import ravenclawLogo from "../assets/images/ravenclaw.png";
import huflepuffLogo from "../assets/images/hufflepuff.png";

function HouseDetails() {
  const houses = [
    {
      name: "Gryffindor",
      logo: gryffindorLogo,
      color: "bg-red-700",
    },
    {
      name: "Slytherin",
      logo: slytherinLogo,
      color: "bg-green-700",
    },
    {
      name: "Ravenclaw",
      logo: ravenclawLogo,
      color: "bg-blue-700",
    },
    {
      name: "Hufflepuff",
      logo: huflepuffLogo,
      color: "bg-yellow-700",
    },
  ];

  const [houseName, setHouseName] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("");
  const params = useParams();

  const selectedHouse = houses.find(
    (house) => house.name.toLowerCase() === params.id.toLowerCase()
  );

  const url = (houseName) =>
    `https://hp-api.herokuapp.com/api/characters/house/${houseName}`;

  useEffect(() => {
    if (params.id) {
      setHouseName(params.id);
      if (selectedHouse) {
        setColor(selectedHouse.color);
      }
    }
  }, [params]);

  const fetchCharacters = async () => {
    if (!houseName) return;
    try {
      const results = await fetch(url(houseName));
      const details = await results.json();
      setCharacters(details);
    } catch (error) {
      console.error("an error catched whyle fetching: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (houseName) {
      fetchCharacters();
    }
  }, [houseName]);

  return (
    <div className={`min-h-screen ${color} p-4`}>
      <h1 className="flex justify-center text-5xl font-harrypotter font-bold text-burgundy text-shadow p-8">
        {houseName.toUpperCase()}
      </h1>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <CharacterGrid characters={characters} />
        </div>
      )}
    </div>
  );
}

export default HouseDetails;
