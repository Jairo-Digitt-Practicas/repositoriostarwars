'use client'
import React, { useEffect, useState } from 'react';
import GeneradorData from '../../../components/GeneradorData';
import SearchComponent from '../../../components/SearchComponent';

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

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPeople = await fetchAllUsers();
      setPeople(fetchedPeople);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Personajes</h1>
      <SearchComponent setPeople={setPeople} />
      <GeneradorData data={people} type="people" />
    </div>
  );
};

export default PersonajesPage;

