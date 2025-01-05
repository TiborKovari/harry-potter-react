import { Link } from "react-router-dom";

function HouseCard({ house, index }) {
  return (
    <div
    key={index} 
    className="transition-transform duration-300 hover:transform hover:scale-110  opacity-85">
      <Link
        to={`/houses/${house.name.toLowerCase()}`}
        key={house.name}
        className={`block w-48 h-48 rounded-full shadow-md  ${house.color}  animate-spin-in`}
      >
        <div className="flex flex-col items-center justify-center h-full text-white text-2xl font-bold text-center relative">
          <img src={house.logo} alt={house.name} className="h-full" />
        </div>
      </Link>
    </div>
  );
}

export default HouseCard;
