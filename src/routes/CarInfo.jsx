import { useParams } from "react-router-dom";

import carDatabase from "../carLists/cars.json"

const CarInfo = () => {

    // CSS styles

    const containerStyle = {
        margin: "20px",
        padding: "30px",
        width: "80%",
        height: "auto",
        border: "1px black solid",
        borderRadius: "10px"
    }

    const carNameStyle = {
        fontSize: "2rem",
        margin: "20px"
    }

    const imgsContainerStyle = {
        margin: "15px",
        display: "flex",
        justifyContent: "space-around"
    }

    const carImgStyle = {
        width: "300px",
    }

    const infoContainerStyle = {
        fontSize: "1.2rem",
        fontFamily: "sans-serif",
        padding: "15px"
    }

    const contactStyle = {
        fontSize: "1.2rem",
        fontFamily: "serif",
        fontWeight: "bold"
    }

    // Get the car Id from url param and take info about the car from the database

    const { car } = useParams()

    const carInfo = carDatabase[parseInt(car)-1]
    
    
    return (
        <div style={containerStyle}>
            {/* Here will be displayed three pictures of the car, name, 
            // information and contact number or email 
            // this info will come from carInfo @param */}
            <span style={carNameStyle}>{carInfo.carName}</span> <br />
            <div style={imgsContainerStyle}>
                <img src={carInfo.carPhoto1} style={carImgStyle} />
                <img src={carInfo.carPhoto2} style={carImgStyle} />
                <img src={carInfo.carPhoto3} style={carImgStyle} />
            </div>
            <div style={infoContainerStyle}>
                <ul>
                    <li> Production Year: {carInfo.year} </li>
                    <li> Price: {carInfo.price}$ </li>
                    <li> Mileage: {carInfo.mileage}km </li>
                    <li> Fuel: {carInfo.fuel} </li>
                </ul>
                <span style={contactStyle}> Number: {carInfo.contactNumber} </span> <br />
                <span style={contactStyle}> Email: {carInfo.contactEmail} </span>
            </div>
        </div>
    )
};

export default CarInfo;
