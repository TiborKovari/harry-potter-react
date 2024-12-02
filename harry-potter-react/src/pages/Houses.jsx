import { Link } from "react-router-dom";
import gryffindorLogo from "../assets/images/gryffindor.png";
import slytherinLogo from "../assets/images/slytherin.png";
import ravenclawLogo from "../assets/images/ravenclaw.png";
import huflepuffLogo from "../assets/images/hufflepuff.png";

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

function Houses() {
  return (
    <div className="bg-hat bg-center bg-cover bg-fixed min-h-screen flex flex-wrap justify-center items-center gap-8 p-8">
      <h1 className="text-4xl font-harrypotter text-burgundy mb-12 animate-fade-in">
        Choose Your House
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12">
        {houses.map((house, index) => (
          <div className="transition-transform duration-300 hover:transform hover:scale-110  opacity-85">
            <Link
              to={`/houses/${house.name.toLowerCase()}`}
              key={house.name}
              className={`block w-48 h-48 rounded-full shadow-md  ${
                house.color
              }  animate-spin-in`}
            >
              <div className="flex flex-col items-center justify-center h-full text-white text-2xl font-bold text-center relative">
                <img src={house.logo} alt={house.name} className="h-full" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Houses;
