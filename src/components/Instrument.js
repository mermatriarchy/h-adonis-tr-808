import React from 'react';
import Sequence from './Sequence';
import {Row} from 'react-bootstrap';

export default function Instrument(props) {
  {/* Sequence should be lifted up & rendered here, rather than just having
   /* this be a component that passes down props, but again, ran out of time. */}
  return (
    <>
      <Row>
        <div className="instrument-name">
            {props.instrumentName}
        </div>
        <Sequence 
          instrumentSequence={props.instrumentSequence}
          totalBeats={props.totalBeats}
          position={props.position}
          currPosition={props.currPosition}
        />
      </Row>
    </>
  );
}