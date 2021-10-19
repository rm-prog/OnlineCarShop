import { 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText,
    ListGroup,
    ListGroupItem    
} from "react-bootstrap"

const CarCard = () => {
    return (
        <Card border="warning" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../carImages/2018-mclaren-senna-ll-103-1570476637.jpg" style={ { width: '286px', height: "200px" } } />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CarCard
