import { useState } from 'react';

function SearchBar(props) {
  const [searchItem, setSearchItem] = useState('');
  const [searchParam, setSearchParam] = useState('name');

  const handleChange = e => {
    setSearchItem(e.target.value);
  }

  const changeSearchParam = e => {
    setSearchParam(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log();
    props.onSearch(searchItem, searchParam);
    setSearchItem('');
  }

  return (
    <div className="searchBar">
      <form>
        <label htmlFor="name">Search for Pokemon</label>
        <input name="pokemon" type="text" onChange={handleChange} value={searchItem}></input>
        <select name="search-params" onChange={changeSearchParam}>
          <option value="name">By Name or ID</option>
          <option value="type">By Type</option>
        </select>
        <button type="submit" onClick={handleSubmit}>SEARCH</button>
      </form>
    </div>
  );
}

export default SearchBar;
