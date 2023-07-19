import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      return;
    }

    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
      const { results } = response.data;
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handlePersonClick = (person) => {
    const userId = person.url.split('/').slice(-2, -1)[0];
    router.push(`/users/${userId}`); 
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result) => (
          <li key={result.url} onClick={() => handlePersonClick(result)}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;


