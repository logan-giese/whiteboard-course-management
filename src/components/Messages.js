import React from 'react'
import {Component} from 'react'
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

  class Messages extends React.Component {
    constructor(props) {
      super(props);
      this.handleInboxClick = this.handleInboxClick.bind(this);
      this.handleBackClick = this.handleBackClick.bind(this);
      this.state = {isInboxed: false};
    }
  
    handleInboxClick() {
      this.setState({isInboxed: true});
    }
  
    handleBackClick() {
      this.setState({isInboxed: false});
    }
  
    render() {
      const isInboxed = this.state.isInboxed;
      let button;
  
      if (isInboxed) {
        button = <BackButton onClick={this.handleBackClick} />;
      } else {
        button = <InboxButton onClick={this.handleInboxClick} />;
      }
  
      return (
        <div>
          <Titles isInboxed={isInboxed} />
          {button}
        </div>
      );
    }
  }
  
  function InboxTitle(props) {
    return <h1>Welcome to Inbox Page!</h1>;
  }
  
  function MessagesTitle(props) {
    return <h1>Welcome to Messages Page!</h1>;
  }
  
  function Titles(props) {
    const isInboxed = props.isInboxed;
    if (isInboxed) {
      return <InboxTitle />;
    }
    return <MessagesTitle />;
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
  
  export default Messages