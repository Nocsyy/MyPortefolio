import React from 'react';
import './projet.css';

function Projet() {
  return (
    <div className='ctn-project'>
      <div className='scroll-container'>
        <div className="container-1" style={{ backgroundColor: "blue" }}>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
        </div>
        <div className='container-2' style={{ backgroundColor: "red" }}>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
        </div>
        <div className='container-3' style={{ backgroundColor: "green" }}>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
          <h3>Test</h3>
        </div>
      </div>
    </div>
  );
}

export default Projet;