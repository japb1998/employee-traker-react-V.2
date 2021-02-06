import {Form,Col,Container} from 'react-bootstrap'
function Search(props) {
return(
    <div className="search">
<Container>
<Form>
    <Form.Group>
        <Form.Label><h1>Search Employee</h1></Form.Label>
        <Form.Control size="lg" type="text" placeholder="Search" value={props.search} name="search" onChange={props.handleInput}></Form.Control>
    </Form.Group>
</Form>
</Container>
</div>
)
};
export default Search