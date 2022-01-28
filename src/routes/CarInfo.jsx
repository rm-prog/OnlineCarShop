import { useParams } from "react-router-dom";

import carDatabase from "../carLists/cars.json"

const CarInfo = () => {

    // CSS styles

    const containerStyle = {
        margin: "20px",
        padding: "20px",
        width: "80%",
        height: "600px",
        border: "1px black solid",
        borderRadius: "10px"
    }

    const carNameStyle = {
        fontSize: "2rem",
    }

    const { car } = useParams()

    const carInfo = carDatabase[parseInt(car)-1]
    
    

    return (
        <div style={containerStyle}>
            {/* Here will be displayed three pictures of the car, name, 
            // information and contact number or email 
            // this info will come from carInfo @param */}
            <span style={carNameStyle}>{carInfo.carName}</span>
            <img src={carInfo.carPhoto} />

        </div>
    )
};

export default CarInfo;
