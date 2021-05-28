import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';

export const WarningDialog = ({ onOk, onCancel }) => {
  return (
    <div className="dialog-box">
      <Container>
        <Row>
          <Col xs={12} md={6}></Col>
          Click OK to continue else go to login
        </Row>
        <br />
        <Row>
          <Col>
            <Button type="button" variant="light" onClick={onOk}>
              Ok
            </Button>
            <Button type="button" variant="light" onClick={onCancel}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
