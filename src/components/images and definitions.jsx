
import { Component } from "react";
import {Container, Card, Button,  Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import item from '../data/history.json'
import ImageComments from './imageComments'
import SingleBook from "./SingleBook";
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
               
              <SingleBook obj={HistoryBook} />

                
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
