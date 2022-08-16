import { useEffect, useState } from 'react';

function SearchBar() {
  const [searchItem, setSearchItem] = useState('');

  function handleChange(e) {
    const {name, value} = e.target;
    setSearchItem(e.target.value);
  }

  return (
    <div className="searchBar">
      <form>
        <label htmlFor="name">Search for Pokemon:</label>
        <input name="pokemon" type="text" onChange={handleChange} value={searchItem}></input>
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchBar;
