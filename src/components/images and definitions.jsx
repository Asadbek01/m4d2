
import { Component } from "react";
import {Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import item from '../data/history.json'
import ImageComments from './imageComments'
import BookList from "./BookList";
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
                    <BookList data={item} />
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
