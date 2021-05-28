import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';

export const LogOutDialog = ({ onOk }) => {
  return (
    <div className="dialog-box">
      <Container>
        <Row>
          <Col xs={12} md={6}></Col>
          10 seconds passed , you will be logged out
        </Row>
        <br />
        <Row>
          <Col>
            <Button type="button" variant="light" onClick={onOk}>
              Ok
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
