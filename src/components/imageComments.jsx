import ListGroup from 'react-bootstrap/ListGroup'

const ImageComments =(props)=>(

    <ListGroup>
    {
        props.SelectedImage ? props.SelectedImage.category.map(c => (
                <ListGroup.Item >{c.category}</ListGroup.Item>
            )) : <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
        }       
        </ListGroup>
  
)
export default ImageComments;
