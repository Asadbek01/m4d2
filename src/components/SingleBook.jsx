import Card from 'react-bootstrap/Card'
const SingleBook =(props)=>{

<Card class = 'card'>
                    
                    
<Card.Img variant="top" src= {props.HistoryBook.img} />
 
<Card.Body>

  <Card.Text>
   {props.HistoryBook.title}
  </Card.Text>
 
</Card.Body>
</Card>
}
export default SingleBook;