import React, {useState} from 'react';
import Measures from './Measures';
import Instrument from './Instrument';
import instruments from '../data/instruments';
import demos from '../data/demos';
import { Row } from 'react-bootstrap';

import _ from 'underscore';

export default function Machine() {
  const [demo, setDemo] = useState(0);
  //0 can be the variable from the sequencer selection to change with preset array is loaded
  const demoTrack = demos.map( index => index.sequence)[demo]
  
  {/* hardcoding these for now, but we'll need to get the num of instruments from our pre-made demo list */}
  const numOfMeasures = 4;
  const numOfBeats = 4;
  const totalBeats = _.range(numOfMeasures * numOfBeats);

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
          />
      { instruments.map( index => (
        <Instrument 
          key={index.id}
          totalBeats={totalBeats}
          numOfInstruments={numOfInstruments}
          instrumentName={index.name}
          instrumentSequence={demoTrack[index.id - 1]}
        />
        ))
      }
    </>
  );
}