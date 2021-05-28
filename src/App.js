import React, { Component } from 'react';
import { DialogBox } from './components/DialogBox';

class App extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.resetTimer);
    document.addEventListener('keypress', this.resetTimer);
    this.timer();
  }

  timer = () => setTimeout(() => this.setState({ open: true }), 3000);

  resetTimer = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div>
        <h1>this is main page</h1>
        <div className="dialog">
          {this.state.open && (
            <DialogBox onOk={() => this.setState({ open: false })} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
