import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingIndicator = () => (
  <div className="loading-container">
    <img src="/loading.jpg" alt="Cargando..." className="loading-image" />
    <div className="loading-icon">
    <p className="loading-text">Cargando...</p>
    <p>
      <FontAwesomeIcon icon={faSpinner} spin size="1x" /> 
      </p>
    </div>
  </div>
);

export default LoadingIndicator;
