import React from 'react';

import { Row, Col } from 'react-bootstrap';

export default function MasterControls(props) {
  return (
    <>
      <Row>  
        <Col md={{span: 2, offset: 8}}>
          <div className="green-bg" onClick={props.handlePlay}>
            Play
          </div>
        </Col>
        <Col md={2}>
          <input type="number" className="outline" value={props.bpm} onChange={props.changeBpm}></input>
        </Col>
      </Row>
    </>
  );
}