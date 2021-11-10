import MyBadge from './MyBadge';
import Alert from 'react-bootstrap/Alert' 
const WarningSign = (props)=>(
<Alert variant={"danger"}>
    <MyBadge text="IMPORTANT!" color="primary" />
    {props.text}
  </Alert>

)
export default WarningSign;