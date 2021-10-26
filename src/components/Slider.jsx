import CarCard from "./CarCard"
import { 
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight
} from "react-icons/fa"



const Slider = ( { cardsInfo } ) => {

    // @param CardsInfo will contain info that will fill the carCards

    // CSS styles

    const sliderContainerStyle = {
        marginTop: "20px",
        marginBottom: "20px",
        paddingLeft: "80px",
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "flex",
        justifyContent: "space-around",
        overflowX: "hidden"
    }

    return (
        <div style={sliderContainerStyle}>
            <FaArrowAltCircleLeft />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <FaArrowAltCircleRight />
        </div>
    )
}

export default Slider
