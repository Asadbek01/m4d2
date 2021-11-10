import ListGroup from 'react-bootstrap/ListGroup'
const ImageComments =(props)=>(

    <ListGroup>
        <>
        {
            props.SelectedImage ? props.SelectedImage.category.map(categ =>(
                <ListGroup.Item key ={categ.price}>{categ.price}</ListGroup.Item>

            )):  <ListGroup.Item>Sorry for that</ListGroup.Item>

        }
        </>
  
</ListGroup>
)
export default ImageComments;
