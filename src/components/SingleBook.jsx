import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CommentList from './CommentsList'

class SingleBook extends Component {

  state =  {
    selected: false
  }

render() {
  return (
    <>
        <Card className ='card' bg={this.state.selected ? 'success' : 'light'}>
                            
                            
        <Card.Img variant="top" src= {this.props.obj.img} onClick={() => {
          this.setState({selected: !this.state.selected})
        }}/>
        
        <Card.Body>

          <Card.Text>
          {this.props.obj.title}
          </Card.Text>
        <CommentList />
        </Card.Body>
        </Card>
        {

           this.state.selected && <ListGroup.Item variant="primary">Primary</ListGroup.Item>
           
      
          
        

        }
        </>
  )
}
componentDidMount = async () => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.obj.asin,{
   method:'GET',
    headers:{
     Athorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWI0NmFhY2FhMjAwMTU1MmEzYWQiLCJpYXQiOjE2MzY1NTc5MTgsImV4cCI6MTYzNzc2NzUxOH0.0uJYLRQ8vPX7zibZaGBEZzejR9mkcYxZtArb1AfkaRA"

}
    })
    if(response.ok) {
      const data = await response.json()
    	this.setState({ reservations: data })
    } else {
    	console.log('error while fetching')
    }
  } catch(e) {
    console.log(e)
  }
}
}

export default SingleBook;