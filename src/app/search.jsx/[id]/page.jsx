import { useRouter } from 'next/router';

const SearchPage = () => {
  const router = useRouter();
  const { term } = router.query;

  return (
    <div>
      <h1>Search Results for: {term}</h1>
    </div>
  );
};

export default SearchPage;
