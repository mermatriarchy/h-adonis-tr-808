import React from 'react';

import { Row, Col } from 'react-bootstrap';

export default function MasterControls(props) {
  return (
    <>
      <Row>  
        {/* Do play & stop need to be separate? TBD, but I suspect no */}
        <Col md={{span: 2, offset: 8}}>
          <div className="green-bg" onClick={props.handlePlay}>
            Play
          </div>
        </Col>
        <Col md={2}>
          <div>
            BPM goes here now
          </div>
        </Col>
      </Row>
    </>
  );
}