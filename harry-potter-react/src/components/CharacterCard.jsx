function CharacterCard({ character }) {
  return (
    <div className="bg-[#fdf5e6] opacity-85 shadow-lg border-2 border-[#740001] rounded-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl animate-fade-in">
      <img
        src={character.image || "https://via.placeholder.com/150"}
        alt={`${character.name}`}
        className="w-24 h-24 rounded-full object-cover border-4 border-gold mb-4"
      />
      <h2 className="font-bold text-lg text-center text-[#740001]">
        {character.name}
      </h2>
      <p className="text-gray-700 text-center italic">{character.species}</p>
      <p className="text-gray-700 text-center italic">{character.gender}</p>
    </div>
  );
}

export default CharacterCard;