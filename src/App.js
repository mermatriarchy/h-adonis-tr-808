import React from 'react';
import MasterControls from './components/MasterControls';
import Machine from './components/Machine';
import { Container } from 'react-bootstrap';

export default function App() {
  
  return (
    <>
      <Container>
        <header><h1>Digital TR-808</h1></header>
        <MasterControls />
        <Machine />
      </Container>
    </>
  );
}