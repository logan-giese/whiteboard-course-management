import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Tools extends Component{
    render(){
        return (
        
            <div>
                <h1>Tools page</h1>
             <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Content Collection</Card.Title>
              <Card.Text>
                All the contents of the student.
              </Card.Text>
              <Button variant="primary">Contents</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Portfolios</Card.Title>
              <Card.Text>
                All the portfolios of the student.
              </Card.Text>
              <Button variant="primary">Portfolios</Button>
            </Card.Body>
          </Card>
          </div>
        
      
        );
    }
    
}
export default Tools