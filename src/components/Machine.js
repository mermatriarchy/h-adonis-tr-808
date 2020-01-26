import React from 'react';
import Measures from './Measures';
import Instrument from './Instrument';
import instruments from '../data/instruments';

import _ from 'underscore';

export default function Machine() {
  {/* hardcoding these for now, but we'll need to get the num of instruments from our pre-made demo list */}
  const numOfMeasures = 4;
  const numOfBeats = 4;
  const totalBeats = _.range(numOfMeasures * numOfBeats);

  const numOfInstruments = _.range(4);

  {/* demos will need to go here*/}
  return (
    <>
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
        />
        ))
      }
    </>
  );
}