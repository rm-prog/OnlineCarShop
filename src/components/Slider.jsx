import { useState } from "react"

import styles from "../styles/App.module.css"

import CarCard from "./CarCard"

const Slider = ( { cardsInfo, sliderTitle } ) => {

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
        marginTop: "7px",
        padding: "30px",
        // display: "flex",
        overflowX: "hidden",
        width: "100%",
        position: "relative",
    }

    const cardsContainerStyle = {
        display: "flex",
        overflowX: "scroll",
        margin: "0 auto",
        padding: "15px",
    }
   const hrStyle = {
        borderTop: "2px dashed black",
        marginTop: "30px"
   }

    return (
        <div style={sliderContainerStyle}>
            <h2>
                {sliderTitle}
            </h2>
            <div style={cardsContainerStyle} id={styles.cardsContainer} >
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div> 
            <hr style={hrStyle} />
        </div>
    )
}

export default Slider
