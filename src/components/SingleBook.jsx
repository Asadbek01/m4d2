import Card from 'react-bootstrap/Card'
const SingleBook =(props)=>(

<Card className ='card'>
                    
                    
<Card.Img variant="top" src= {props.obj.img} />
 
<Card.Body>

  <Card.Text>
   {props.obj.title}
  </Card.Text>
 
</Card.Body>
</Card>
)
export default SingleBook;