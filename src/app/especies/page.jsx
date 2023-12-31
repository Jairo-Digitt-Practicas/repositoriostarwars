import GeneradorData from '../../../components/GeneradorData';

async function fetchUsers() {
  const res = await fetch("https://swapi.dev/api/species");
  const data = await res.json();
  return data.results;
}

  async function EspeciesPage() {
    const species = await fetchUsers();


   return (
    <div className='use-client-container'>
      <h1 className='use-client-title'>Especies</h1>
        <div className='use-client-flex-container'>
          <GeneradorData  data={species} type="species" />
        </div>
    </div>
   );
 }
 
 export default EspeciesPage;