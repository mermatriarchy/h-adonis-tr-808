import React from 'react';
import Beat from './Beat';
import { Row } from 'react-bootstrap';

export default function Measures(props) {
  return (
    <>
      <Row>
      <div className="instrument-name">Measure</div>
      {props.totalBeats.map(number => (
            <Beat
              key={number}
            />
        ))}
    </Row>
    </>
  );
}