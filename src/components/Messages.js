import React from 'react'
import {Component} from 'react'
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

  class Messages extends React.Component {
    constructor(props) {
      super(props);
      this.handleInboxClick = this.handleInboxClick.bind(this);
      this.handleBackClick = this.handleBackClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleInboxClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleBackClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <BackButton onClick={this.handleBackClick} />;
      } else {
        button = <InboxButton onClick={this.handleInboxClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  function UserGreeting(props) {
    return <h1>Welcome to Inbox Page!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Welcome to Messages Page!</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function InboxButton(props) {
    return (
      <button onClick={props.onClick}>
        Inbox
      </button>
    );
  }
  
  function BackButton(props) {
    return (
      <button onClick={props.onClick}>
        Back
      </button>
    );
  }
  
  ReactDOM.render(
    <Messages />,
    document.getElementById('root')
  );

  export default Messages