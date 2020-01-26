import React from 'react';
import Sequence from './Sequence';
import {Row} from 'react-bootstrap';

export default function Instrument(props) {
  return (
    <>
      <Row>
        <div className="instrument-name">
            {props.instrumentName}
        </div>
        <Sequence 
          totalBeats={props.totalBeats}
        />
      </Row>
    </>
  );
}