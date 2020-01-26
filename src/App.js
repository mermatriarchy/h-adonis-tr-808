import React, { useState, useEffect } from 'react';
import MasterControls from './components/MasterControls';
import Machine from './components/Machine';
import { Container } from 'react-bootstrap';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [position] = useState(0);
  const [currPosition, setCurrPosition] = useState(0); 

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if(currPosition < 15){
          setCurrPosition(currPosition => currPosition + 1);
        } else {
          setCurrPosition(0);
        }
      }, 200);
    } else if (!isPlaying && currPosition !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currPosition])

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
        <Machine 
          position={position}
          currPosition={currPosition}
        />
      </Container>
    </>
  );
}