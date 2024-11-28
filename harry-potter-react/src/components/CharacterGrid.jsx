import CharacterCard from "./CharacterCard";

function CharacterGrid({characters}) {
return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map((character)=>(
            <CharacterCard character={character} />
        ))}
    </div>
)
}

export default CharacterGrid;