'use client'
import React, { useEffect, useState } from 'react';
import GeneradorData from '../../../components/GeneradorData';
import SearchComponent from '../../../components/SearchComponent';
import LoadingIndicator from '../../../components/LoadingIndicator';

async function fetchAllUsers() {
  let allResults = [];
  let nextUrl = "https://swapi.dev/api/people";

  while (nextUrl) {
    const res = await fetch(nextUrl);
    const data = await res.json();
    allResults = [...allResults, ...data.results];
    nextUrl = data.next;
  }

  return allResults;
}

const PersonajesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [datosDeBusqueda, setDatosDeBusqueda] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPeople = await fetchAllUsers();
        setPeople(fetchedPeople);
        setDatosDeBusqueda(fetchedPeople);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onChange = (results) => {
    setDatosDeBusqueda(results);
  };

  return (
    <div className="use-client-container">
      <h1 className="use-client-title">Personajes</h1>
      <SearchComponent setPeople={setPeople} people={people} onChangePeople={onChange} />
      <div className="use-client-flex-container">
        {isLoading ? <LoadingIndicator /> : <GeneradorData data={datosDeBusqueda} type="people" />}
      </div>
    </div>
  );
};

export default PersonajesPage;
