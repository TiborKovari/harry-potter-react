import SpellCard from "./SpellCard";

function SpellGrid({ spells }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr animate-fade-in">
      {spells.map((spell) => (
        <SpellCard spell={spell} />
      ))}
    </div>
  );
}

export default SpellGrid;
