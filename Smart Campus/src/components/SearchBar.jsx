function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search events..."
      onChange={e =>
        setSearch({
          type: "SET_SEARCH_TEXT",
          payload: e.target.value
        })
      }
    />
  );
}

export default SearchBar;