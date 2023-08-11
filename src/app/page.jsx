'use client'
import React from 'react';

function IndexPage() {
  return (
    <div className="use-client-title">
      <h1 href="/">Repositorio Star Wars</h1>
      <div>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/JmPaVpU8_b0" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}

export default IndexPage;