import React from 'react';
import { Button } from 'react-bootstrap';

export default function Login(props) {
  return (
    <div>
      <h1>this is login page</h1>
      <div className="login">
        <Button type="button" onClick={() => props.history.push('/home')}>
          Login
        </Button>
      </div>
    </div>
  );
}
