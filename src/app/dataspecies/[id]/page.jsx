async function getUser(id) {
    const res = await fetch(`https://swapi.dev/api/species/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  }
  
  async function SpeciesPage({ params }) {
    const species = await getUser(params.id);
  
    return (
      <div>
        <h1>Species Details</h1>
        <div>
          <h2>{species.name}</h2>
          <img
            src={`https://starwars-visualguide.com/assets/img/species/${params.id}.jpg`}
            width="120"
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
    );
  }
  
  export default SpeciesPage;