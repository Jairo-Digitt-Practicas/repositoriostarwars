import GeneradorData from '../../../components/GeneradorData';

async function fetchUsers() {
  const res = await fetch("https://swapi.py4e.com/api/species");
  const data = await res.json();
  return data.results;
}

  async function EspeciesPage() {
    const species = await fetchUsers();


   return (
      <div>
        <h1>Especies</h1>
        <GeneradorData data={species} type="species" />
        </div>
   );
 }
 
 export default EspeciesPage;