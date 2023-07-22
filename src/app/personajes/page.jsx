'use client'
import React, { useEffect, useState } from 'react';
import GeneradorData from '../../../components/GeneradorData';
import SearchComponent from '../../../components/SearchComponent';
import './personajes-page.css';; // Asegúrate de ajustar la ruta del archivo de estilos

async function fetchAllUsers() {
  let allResults = [];
  let nextUrl = "https://swapi.py4e.com/api/people";

  while (nextUrl) {
    const res = await fetch(nextUrl);
    const data = await res.json();
    allResults = [...allResults, ...data.results];
    nextUrl = data.next;
  }

  return allResults;
}

const PersonajesPage = () => {
  const [people, setPeople] = useState([]);
  const [datosDeBusqueda, setDatosDeBusqueda] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPeople = await fetchAllUsers();
      setPeople(fetchedPeople);
      setDatosDeBusqueda(fetchedPeople);
    };

    fetchData();
  }, []);

  const onChange = (results) => {
    setDatosDeBusqueda(results);
  };

  return (
    <div>
      <h1>Personajes</h1>
      <SearchComponent setPeople={setPeople} people={people} onChangePeople={onChange} />
      <GeneradorData data={datosDeBusqueda} type="people" />
    </div>
  );
};

export default PersonajesPage;


