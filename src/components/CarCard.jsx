import { 
    Card,
    Image   
} from "react-bootstrap"

import imgSrc from  "../carImages/2018-mclaren-senna-ll-103-1570476637.jpg"

const CarCard = () => {

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
            <Card.Img as={Image} fluid={true} variant="top" src={imgSrc} rounded style={cardImgStyle} />
            <Card.Body>
                <Card.Title> McLaren Senna 2009 </Card.Title>
                <Card.Text>
                    Price: 100000$ ; 100000 km, 2.3 Diesel, New Tyres
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CarCard
