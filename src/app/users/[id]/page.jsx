'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

async function getUser(id) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  return data;
}

const PeoplePage = () => {
  const router = useRouter();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      if (router.query.id) {
        const personData = await getUser(router.query.id);
        setPerson(personData);
      }
    };

    fetchPerson();
  }, [router.query.id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Person Details</h1>
      <div>
        <h2>{person.name}</h2>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${router.query.id}.jpg`}
          width="120"
          alt={person.name}
        />
        <p>Género: {person.gender}</p>
        <p>Altura: {person.height}</p>
        <p>Peso: {person.mass}</p>
        <p>Color de pelo: {person.hair_color}</p>
        <p>Color de piel: {person.skin_color}</p>
        <p>Color de ojos: {person.eye_color}</p>
        <p>Año de nacimiento: {person.birth_year}</p>
      </div>
    </div>
  );
};

export default PeoplePage;







