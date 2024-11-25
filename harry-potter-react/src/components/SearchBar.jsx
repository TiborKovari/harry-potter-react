function SearchBar({ search, setSearch}) {
    return (
        <div className="flex justify-center mb-6">
            <input
            type="text"
            placeholder="Search for a character ..."
            className="opacity-55 border-2 border-burgundy rounded-md p-2 w-1/2"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
    );
}