import React, { useState } from 'react';
import MasterControls from './components/MasterControls';
import Machine from './components/Machine';
import { Container } from 'react-bootstrap';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    }
    else {
      setIsPlaying(true);
    }
  }

  const updateBpm = (event) => {
    setBpm(event.target.value);
  }
  
  return (
    <>
      <Container>
        <header><h1>Digital TR-808</h1></header>
        <MasterControls 
          handlePlay={togglePlay}
          bpm={bpm}
          changeBpm={updateBpm}
        />
        <Machine />
      </Container>
    </>
  );
}