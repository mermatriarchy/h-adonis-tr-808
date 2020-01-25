import React from 'react';
import Sequence from './Sequence';
import {Row} from 'react-bootstrap';

export default function Instrument() {
  return (
    <>
      <Row>
        <div className="instrument-name">Instrument Name Goes Here</div>
        <Sequence />
      </Row>
    </>
  );
}