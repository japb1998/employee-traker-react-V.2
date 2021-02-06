// import {searchEmployees} from './util/API';
import {Card, CardGroup, CardDeck,Container, Col,ListGroup} from 'react-bootstrap';
function EmployeeList(props){
    
    return(
<div className="employee" >
    <Container style={{padding:'0.5rem'}}>
<CardDeck>
        {props.results.map((employee)=>(
            <Col md={4} sm={6} className='card-col' key={employee.login.uuid}>
        <Card style={{maxHeight:'20rem', overflowY: 'scroll',width: '18rem'}}className='card invisible-scrollbar' >
        <Card.Img  style={{ margin:'0 auto', width:'15rem',height:'15rem'}}variant="top" src={employee.picture.medium} alt={employee.name.first.toLowerCase()}/>
        <Card.Body>
        <Card.Title>{employee.name.first.toLowerCase()} {employee.name.last}</Card.Title>
        <ListGroup variant="flush">
    <ListGroup.Item>Employee ID:{ employee.id.value}</ListGroup.Item>
    <ListGroup.Item>email:{employee.email}</ListGroup.Item>
  </ListGroup>
        </Card.Body>
        </Card>    
        </Col>
                ))}
        </CardDeck>
        </Container>
        </div>
    )
}

export default EmployeeList;