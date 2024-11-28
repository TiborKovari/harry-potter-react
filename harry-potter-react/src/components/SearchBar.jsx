function SearchBar({ search, setSearch, target}) {
    return (
        <div className="flex justify-center mb-6">
            <input
            type="text"
            placeholder={`Search for a ${target || ''} ...`}
            className="opacity-65 border-2 border-burgundy rounded-md p-2 w-1/2"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;