'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

function GeneradorData({ data, type }) {
  const router = useRouter();

  const extractNumericData = (url) => {
    const numericData = url.match(/\d+/g);
    return numericData ? numericData.pop() : '';
  };

  const handleClick = (numericData) => {
    if (type === 'people') {
      router.push(`/users/${numericData}`);
    } else if (type === 'species') {
      router.push(`/dataspecies/${numericData}`);
    }
  };

  return (
    <div className="use-client-GeneradorData">
      {data.map((item) => {
        const numericData = extractNumericData(item.url);

        return (
          <div key={item.url} className="grid-item" onClick={() => handleClick(numericData)}>
            <div>
              {type === 'people' ? (
                <img src={`https://starwars-visualguide.com/assets/img/characters/${numericData}.jpg`} width="120" />
              ) : (
                <img src={`https://starwars-visualguide.com/assets/img/species/${numericData}.jpg`} width="120" />
              )}
              <h2>{item.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GeneradorData;
