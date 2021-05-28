import React, { Component } from 'react';
import { DialogBox } from '../components/DialogBox';

export default class Home extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.resetTimer);
    document.addEventListener('keypress', this.resetTimer);
    this.timer();
  }

  timer = () => setInterval(() => this.setState({ open: true }), 5000);

  resetTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div>
        <h1>this is main page</h1>
        <h3>wait for 5 seconds and timeout will happen</h3>
        <div className="dialog">
          {this.state.open && (
            <DialogBox
              onOk={() => this.setState({ open: false })}
              onCancel={() => this.props.history.push('/login')}
            />
          )}
        </div>
      </div>
    );
  }
}
