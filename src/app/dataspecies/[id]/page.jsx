'use client'
import React, { useEffect, useState } from 'react';

async function getUser(id) {
  const res = await fetch(`https://swapi.dev/api/species/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

const SpeciesPage = ({ params }) => {
  const [species, setSpecies] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSpecies = await getUser(params.id);
      setSpecies(fetchedSpecies);
    };

    fetchData();
  }, [params.id]);

  return (
    <div className='use-client-container-species'>
      <h1 className='use-client-title-species'>Species Details</h1>
      <div className='use-client-flex-container-species'>
        <div className='use-client-GeneradorData-species'>
          <h2>{species.name}</h2>
          <img
            src={`https://starwars-visualguide.com/assets/img/species/${params.id}.jpg`}
            width="120"
            alt={species.name}
          />
          <p>Classification: {species.classification}</p>
          <p>Designation: {species.designation}</p>
          <p>Average Height: {species.average_height}</p>
          <p>Skin Colors: {species.skin_colors}</p>
          <p>Hair Colors: {species.hair_colors}</p>
          <p>Eye Colors: {species.eye_colors}</p>
          <p>Average Lifespan: {species.average_lifespan}</p>                
          <p>Homeworld: {species.homeworld}</p>
          <p>Language: {species.language}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeciesPage;