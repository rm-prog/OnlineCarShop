import { useParams } from "react-router-dom";

import carDatabase from "../carLists/cars.json"

const CarInfo = () => {

    // CSS styles

    const containerStyle = {
        margin: "20px",
        width: "80%",
        height: "600px",
        border: "1px black solid",
        borderRadius: "10px"
    }

    const { car } = useParams()

    const carInfo = carDatabase[parseInt(car)-1]
    // console.log(carInfo)
    // console.log(carDatabase)
    

    return (
        <div style={containerStyle}>
            {/* Here will be displayed three pictures of the car, name, 
            // information and contact number or email 
            // this info will come from carInfo @param */}
            {
                carInfo.carName
            }
        </div>
    )
};

export default CarInfo;
