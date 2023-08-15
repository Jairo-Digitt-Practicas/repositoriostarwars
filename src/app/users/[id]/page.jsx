'use client';
import React, { useEffect, useState } from 'react';

async function getUser(id) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

const PeoplePage = ({ params }) => {
  const [people, setPeople] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPeople = await getUser(params.id);
      setPeople(fetchedPeople);
    };

    fetchData();
  }, [params.id]);

  return (
    <div className='use-client-container'>
      <h1 className='use-client-title'>People Details</h1>
      <div>
        <input></input>
      </div>
      <div className='use-client-flex-container'>
        <div className='use-client-GeneradorData'>
          <h2>{people.name}</h2>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
            width="120"
            alt={people.name}
          />
          <p>Género: {people.gender}</p>
          <p>Altura: {people.height}</p>
          <p>Peso: {people.mass}</p>
          <p>Color de pelo: {people.hair_color}</p>
          <p>Color de piel: {people.skin_color}</p>
          <p>Color de ojos: {people.eye_color}</p>
          <p>Año de nacimiento: {people.birth_year}</p>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
