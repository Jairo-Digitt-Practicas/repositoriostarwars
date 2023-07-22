async function getUser(id) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function PeoplePage({ params }) {
  const people = await getUser(params.id);

  return (
    <div>
      <h1>People Details</h1>
      <div>
        <h2>{people.name}</h2>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
          width="120"
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
  );
};

export default PeoplePage;







