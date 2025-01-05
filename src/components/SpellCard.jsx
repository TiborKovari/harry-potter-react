function SpellCard({ spell }) {
  return (
    <div
      key={spell.id}
      className="bg-parchment opacity-86 p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 h-full flex flex-col items-center justify-between text-center"
    >
      <h2 className="text-3xl font-bold text-burgundy">{spell.name}</h2>
      <p className="text-gray-900 font-bold">{spell.description}</p>
    </div>
  );
}

export default SpellCard;
