import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    const result = onSearch(searchId);
    if (result) {
      alert(`User Found: ${result.name}`);
    } else {
      alert("User Not Found");
    }
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;