import { useRouter } from 'next/router';

const SearchPage = () => {
  const router = useRouter();
  const { term } = router.query;

  // Aquí puedes usar el término de búsqueda "term" para realizar la lógica de búsqueda y obtener los resultados

  return (
    <div>
      <h1>Search Results for: {term}</h1>
      {/* Muestra los resultados de búsqueda */}
    </div>
  );
};

export default SearchPage;
