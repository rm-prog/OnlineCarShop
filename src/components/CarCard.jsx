import { useState } from "react"
import { 
    Card,
    Image   
} from "react-bootstrap"
import { Link } from "react-router-dom"

const CarCard = ( { carInfo } ) => {

    // Css Styles

    const cardContainerStyle = {
        width: '18rem', 
        display: "inline-block",
        marginRight: "20px",
        marginLeft: "20px",
        minWidth: "240px",
    }   

    const cardImgStyle = {
        minWidth: '235px', 
        height: "200px"
    }

    return (
        <Card border="warning" style={cardContainerStyle}>
            <Card.Img as={Image} fluid={true} variant="top" src={carInfo.carPhoto} rounded style={cardImgStyle} />
            <Card.Body>
                <Card.Title> {carInfo.carName} </Card.Title>
                <Card.Text>
                    {carInfo.carInfo}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Link to={`/car/${carInfo.id}/${carInfo.carName}`} style={{ color: "inherit",textDecoration: "none" }}>
                    <Card.Link>Card Link</Card.Link>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CarCard
