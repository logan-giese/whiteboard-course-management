import React from 'react'
import { Button } from 'react-bootstrap';
import {Link } from "react-router-dom";


function About() {
    return <div className="content">
        <h1>Messages page</h1>
        <Link to="/inbox"><Button>
              Inbox 
            </Button>
            </Link> 
        <Button> Sent </Button>
      </div>;
  }
  
  export default About;