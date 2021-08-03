import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Tools extends Component{
    render(){
        return (
            <div>
                <h1>Tools page</h1>
             <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Content Collection</Card.Title>
              <Card.Text>
                All the contents of the student.
              </Card.Text>
              <Button variant="primary">Contents</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Portfolios</Card.Title>
              <Card.Text>
                All the portfolios of the student.
              </Card.Text>
              <Button variant="primary">Portfolios</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Goals</Card.Title>
              <Card.Text>
                Goals of the student.
              </Card.Text>
              <Button variant="primary">Goals</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Performance</Card.Title>
              <Card.Text>
                Performance of the student in coursework & other activities.
              </Card.Text>
              <Button variant="primary">Performance</Button>
            </Card.Body>
          </Card>
          </div>
        );
    }
    
}
export default Tools