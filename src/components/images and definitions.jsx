
import { Component } from "react";
import {Container, Card, Button,  Row} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import item from '../data/history.json'
class HistoryBooks extends Component{
    render(){
        return(
            
                  <>
              <Container>
                <h2 className="text-center my-5">Latest Release</h2>
                  <Row className="row">

                
              {
             
         
             item.map(HistoryBook => (
        
                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src= {HistoryBook.img} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button className="pl-1" variant="primary ">Edit</Button>
                  <Button variant="success">View</Button>

                </Card.Body>
              </Card>
 
                
                
             ))
          }
            </Row>
              </Container>
    

            </>
        )
    }
}
export default HistoryBooks
