import React, { Component } from 'react';
import { WarningDialog } from '../components/WarningDialog';
import { LogOutDialog } from '../components/LogOutDialog';

export default class Home extends Component {
  state = {
    open: false,
    logout: false,
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.resetTimer);
    document.addEventListener('mousedown', this.resetTimer);
    document.addEventListener('keypress', this.resetTimer);
    document.addEventListener('onclick', this.resetTimer);
    this.timer();
    this.autoLogout();
  }

  timer = () => setInterval(() => this.setState({ open: true }), 5000);

  autoLogout = () => setInterval(() => this.setState({ logout: true }), 18000);

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
            <WarningDialog
              onOk={() => this.setState({ open: false })}
              onCancel={() => this.props.history.push('/login')}
            />
          )}
          {this.state.logout && (
            <LogOutDialog onOk={() => this.props.history.push('/login')} />
          )}
        </div>
      </div>
    );
  }
}
