import { useState } from 'react';

function SearchBar(props) {
  const [searchItem, setSearchItem] = useState('');

  const handleChange = e => {
    setSearchItem(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('search:', searchItem);
    props.onSearch(searchItem);
    setSearchItem('');
  }

  return (
    <div className="searchBar">
      <form>
        <label htmlFor="name">Search for Pokemon:</label>
        <input name="pokemon" type="text" onChange={handleChange} value={searchItem}></input>
        <button type="submit" onClick={handleSubmit}>SEARCH</button>
      </form>
    </div>
  );
}

export default SearchBar;
