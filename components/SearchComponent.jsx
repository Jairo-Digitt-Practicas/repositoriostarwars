'use client'
import React, { useState, useEffect } from 'react';

const SearchComponent = ({ people, setPeople, onChangePeople }) => {
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = people;

  useEffect(() => {
    results = results.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase())
    );
    onChangePeople(results);
  }, [search]);

  return (
    <div className="search-container">
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      />
    </div>
  );
};

export default SearchComponent;