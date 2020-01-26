import React, {useState} from 'react';
import Measures from './Measures';
import Instrument from './Instrument';
import instruments from '../data/instruments';
import demos from '../data/demos';
import { Row } from 'react-bootstrap';

import _ from 'underscore';

export default function Machine(props) {
  const [demo, setDemo] = useState(0);
  const demoTrack = demos.map( index => index.sequence)[demo]

   {/* hardcoding these for now, but can make them inputs later */}
   const numOfMeasures = 4;
   const numOfBeats = 4;
   const totalBeats = _.range(numOfMeasures * numOfBeats);

  {/* I had this hard coded at the beginning just to get things working,
   /* but it should be based on the number of sequences in the demo object &
   /* I'm short on time */}
  const numOfInstruments = _.range(4);

  const changeDemo = (nextDemo) => {
    setDemo(nextDemo - 1);
  }
  
  return (
    <>
      <Row>
        { demos.map( index =>
            <div className="demo-btn red-bg" key={index.id} value={index.id} onClick={() => changeDemo(index.id)}>
              {index.demo_name}
            </div>
        )}
      </Row>
      <Measures 
        totalBeats={totalBeats}
        isMeasure={true}
        position={props.position}
        currPosition={props.currPosition}
      />
      { instruments.map( index => (
        <Instrument 
          key={index.id}
          totalBeats={totalBeats}
          numOfInstruments={numOfInstruments}
          instrumentName={index.name}
          instrumentSequence={demoTrack[index.id - 1]}
          position={props.position}
          currPosition={props.currPosition}
        />
        ))
      }
    </>
  );
}