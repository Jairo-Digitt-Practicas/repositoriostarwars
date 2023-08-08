'use client'
import React, { useState, useEffect } from 'react';

const SearchComponent = ({ people, setPeople, onChangePeople }) => {
  // Setear los hooks useState
  const [search, setSearch] = useState("");

  // Funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = people;

  // Metodo de filtrado
  useEffect(() => {
    results = results.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase())
    );
    onChangePeople(results);
  }, [search]);

  // Renderizamos la vista
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