import React from 'react';
import Beat from './Beat';
import { Row } from 'react-bootstrap';

export default function Measures() {
  return (
    <>
      {/* we'll map the beats based on the number of measures */}
      <Row>
      <div className="instrument-name">Measure</div>
      <Beat/>
    </Row>
    </>
  );
}