import React from 'react';
import MasterControls from './components/MasterControls';
import Machine from './components/Machine';

export default function App() {
  
  return (
    <>
      <header>
        <h1>Digital TR-808</h1>
        <MasterControls />
        <Machine />
      </header>
    </>
  );
}