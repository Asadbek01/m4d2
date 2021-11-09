
import { Component } from "react";
import {Container, Card, Button,  Row, } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import item from '../data/history.json'
import { height } from "dom-helpers";
class HistoryBooks extends Component{
    render(){
        return(
            
                  <>
              <Container>
                <h2 className="text-center my-5">Latest Release</h2>
                  <Row className="row justify-content-center ">

              {
                  
         
             item.map(HistoryBook => (
                 
                 <Card class = 'card'>
                    
                    
                <Card.Img class = '' variant="top" src= {HistoryBook.img} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                   {HistoryBook.title}
                  </Card.Text>
                  <Button className=" button1 float-right mb-5 m-2" variant="primary ">Edit</Button>
                  <Button className=' button float-right mt-2'variant="success">View</Button>

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
