import { Component } from 'react'
import Card from 'react-bootstrap/Card'

class SingleBook extends Component {

  state =  {
    selected: false
  }

render() {
  return (
        <Card className ='card' bg={this.state.selected ? 'success' : 'light'}>
                            
                            
        <Card.Img variant="top" src= {this.props.obj.img} onClick={() => {
          this.setState({selected: !this.state.selected})
        }}/>
        
        <Card.Body>

          <Card.Text>
          {this.props.obj.title}
          </Card.Text>
        
        </Card.Body>
        </Card>
  )
}
}

export default SingleBook;