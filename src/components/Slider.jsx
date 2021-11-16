import { useState } from "react"

import styles from "../styles/App.module.css"

import CarCard from "./CarCard"
import { 
   FaArrowAltCircleLeft,
   FaArrowAltCircleRight
} from "react-icons/fa"



const Slider = ( { cardsInfo } ) => {

    // @param CardsInfo will contain info that will fill the carCards

    // State variables

    const [cardsRelativePos, setCardsRelativePos] = useState(0);

    // Functions

    const moveSliderToRight = () => {
        setCardsRelativePos(cardsRelativePos-50);
    }

    const moveSliderToLeft = () => {
        if (cardsRelativePos < 0) setCardsRelativePos(cardsRelativePos+50);
    }

    // CSS styles

    const sliderContainerStyle = {
        marginTop: "20px",
        marginBottom: "20px",
        padding: "10px",
        display: "flex",
        overflowX: "hidden",
        width: "100%",
        position: "relative",
    }

    // const arrowStyle = {
    //     fontSize: "2rem",
    //     cursor: "pointer",
    //     zIndex: "1",
    // }

    const cardsContainerStyle = {
        display: "flex",
        overflowX: "scroll",
        margin: "0 auto",
        padding: "15px",
    }

    return (
        <div style={sliderContainerStyle}>
           { 
              /*  <div> 
                    <FaArrowAltCircleLeft style={arrowStyle} onClick={moveSliderToLeft} /> 
                </div> */
            }
            <div style={cardsContainerStyle} id={styles.cardsContainer} >
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
            {
              /*  <div> 
                    <FaArrowAltCircleRight style={arrowStyle} onClick={moveSliderToRight} />
                </div> */
            }   
        </div>
    )
}

export default Slider
