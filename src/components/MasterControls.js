import React from 'react';
import Play from './Play';
import Stop from './Stop';
import Tempo from './Tempo';

import { Row, Col } from 'react-bootstrap';

export default function MasterControls() {
  return (
    <>
      <Row>  
        {/* Do play & stop need to be separate? TBD, but I suspect no */}
        <Col md={{span: 2, offset: 6}}>
            <Play />
          </Col>
        <Col md={2}>
            <Stop />
          </Col>
        <Col md={2}>
            <Tempo />
        </Col>
      </Row>
    </>
  );
}