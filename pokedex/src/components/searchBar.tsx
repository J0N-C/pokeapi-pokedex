import { useState } from 'react';

function SearchBar(props: any) {
  const [searchItem, setSearchItem] = useState<string>('');
  const [searchParam, setSearchParam] = useState<string>('name');

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchItem(e.currentTarget.value);
  }

  const changeSearchParam = (e: React.FormEvent<HTMLSelectElement>): void => {
    setSearchParam(e.currentTarget.value);
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
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
