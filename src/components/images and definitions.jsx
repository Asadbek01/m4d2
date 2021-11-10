
import { Component } from "react";
import {Container, Card, Button,  Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import item from '../data/history.json'
import ImageComments from './imageComments'
class HistoryBooks extends Component{

  
         state = {


             SelectedImage: undefined,
}

    render(){
        return(
            
                  <>
              <Container>
                <h2 className="text-center my-5">Latest Release</h2>
                  <Row className="row justify-content-center ">

              {
                  
         
             item.map(HistoryBook => (
                 
                 <Card class = 'card'>
                    
                    
                <Card.Img variant="top" src= {HistoryBook.img} 
                onClick ={()=> this.setState(
                  {
                    SelectedImage: HistoryBook
                  }
                  )} 
                 />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                   {HistoryBook.title}
                  </Card.Text>
                  <Button   className="button1 float-right mb-5 m-2" variant="primary ">Edit</Button>
                  <Button className=' button float-right mt-2'variant="success">View</Button>

                </Card.Body>
              </Card>

                
             ))
          }
            </Row>
            <Row className="mt-3 justify-content-center">
              <Col xs={12} md={6} className="text-center">
                <ImageComments SelectedImage={this.state.SelectedImage} />
              </Col>
            </Row>
              </Container>
    

            </>
        )
    }
}
export default HistoryBooks
