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
   {/* These maybe should've been destructured into a props arr */}
   const numOfMeasures = 4;
   const numOfBeats = 4;
   const totalBeats = _.range(numOfMeasures * numOfBeats);

  {/* I had this hard coded at the beginning just to get things working,
   /* but it should be based on the number of sequences in the demo track object &
   /* I'm short on time. I'll include a diagram & link to it in the ReadMe to
   /* better demonstrate what I mean, but each sequence array in the Demo object 
   /* should be associated with an instrument id, so we'd get the instruments & the
   /* number of instruments based on that. */}
  const numOfInstruments = _.range(4);

  const changeDemo = (nextDemo) => {
    setDemo(nextDemo - 1);
  }
  
  {/* I know the mockup had a dropdown for Demo track selection, but Bootstrap's dropdown
   /* components don't show the Demo you've selected (so it would always just say 'Select Demo'
   /* or whatever placeholder text I put in instead of 'Demo 1' etc), so I didn't bother with
   /* trying to alter the default styling & just skipped it altogether for the sake of time. 
   /*
   /* I'd also remove Measures as a component here because it's the same thing as the Instrument. 
   /* I think in the beginning my justification was that measures are semantically different than
   /* instruments even though they're effectively doing the same thing but styled differently in the
   /* UI. I'd just include them as a Default Instrument in the Instrument.js file & add a default
   /* sequence to the Demo.js file, so the measures would be included when the instruments are rendered. */}
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