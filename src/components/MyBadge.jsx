import Badge from 'react-bootstrap/Badge'

const MyBadge = (props) => (
    <Badge className="mr-2" variant={props.color}>{props.text}</Badge>
)

export default MyBadge