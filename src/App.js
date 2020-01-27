import React, { useState, useEffect } from 'react';
import MasterControls from './components/MasterControls';
import Machine from './components/Machine';
import { Container } from 'react-bootstrap';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [position] = useState(0);
  const [currPosition, setCurrPosition] = useState(0);
  {/* As this app grows in complexity, we'd probably want to manage the state of this app differently.
   /* Because multiple components need access to different states that are declared here, it would be
   /* good to use something like Context to share the data more easily (probably good when it's still
   /* on the smaller side) or Redux (better as the app gets larger, but excessive for the app's current
   /* size).
   /* 
   /* I'll add more context to this in the ReadMe, but I need to initialize an additional state here to 
   /* make the beat selection toggle-able. Right now, isActive is a prop that denotes if a beat will be 
   /* triggered/hit during the sequence, but as a prop that isn't connected to a state in a parent component,
   /* that means a user can't click a beat & have it change to isActive (or vice versa) in the sequence since
   /* components can modify their own props in React. Basically, I'd need to convert the current isActive
   /* prop to a state, so when it's clicked, the state will find the beat in the sequence, change it, 
   /* & re-render the beat to show that it will/will not be hit during the sequence. */}

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const calcInterval = () => {
    return (60000/bpm);
  }

  {/* The 15 in the interval below is hardcoded mostly for the sake of time, but it represents the total 
   /* beats in the sequence (the position of a beat is numbered 0-15, so (totalBeats - 1) represents the
   /* max length of the sequence). The number for the max length is static right now, but the
   /* totalBeats, numOfBeats & numOfMeasures in the Machine component should be lifted up
   /* here and initialized with a 4/4 time signature. numOfBeats would need to be renamed as
   /* numOfBeatsPerMeasure to be more accurate & numEqToBeat would need to be added (though that wouldn't
   /* have an impact on calculating total beats). numOfBeatsPerMeasure & numOfMeasures would need to be 
   /* converted into input fields (much like bpm), then the inputs would be multiplied to get the (totalBeats - 1) 
   /* to replace the 15 below to make the length of the sequence more flexible. */}

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if(currPosition < 15){
          setCurrPosition(currPosition => currPosition + 1);
        } else {
          setCurrPosition(0);
        }
      }, calcInterval(bpm));
    } else if (!isPlaying && currPosition !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currPosition])

  const updateBpm = (event) => {
    setBpm(event.target.value);
  }

  {/* The MasterControls below should be lifted up and rendered here, mostly because 
   /* using callback functions to update the state of a parent component is a bit of 
   /* an anti-pattern in React. This happened here because I actually started out by 
   /* over-engineering the component hierarchy a bit & making the Play/BPM buttons their
   /* own components, so I pared those down into the MasterContols, but the MasterControls
   /* need to be pared down again and moved up here, but by the time I realized that,
   /* I'd run out of time to refactor. 
   /*
   /* I'd also rename the Machine component to be DrumMachine to make it more explicit. */}
  
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