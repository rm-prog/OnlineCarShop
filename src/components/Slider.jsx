import { useState } from "react"

import styles from "../styles/App.module.css"

import CarCard from "./CarCard"

const Slider = ( { cardsInfo, sliderTitle, sliderDisplay } ) => {

    // @param CardsInfo will contain info that will fill the carCards

    // State variables

    // Functions

    // CSS styles

    const sliderContainerStyle = {
        marginTop: "7px",
        padding: "30px",
        // display: "flex",
        overflowX: "hidden",
        width: "100%",
        position: "relative",
        display: sliderDisplay
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
                {
                    cardsInfo.map((cardInfo) => (
                        <CarCard carInfo={cardInfo}/>
                    ))
                }
            </div> 
            <hr style={hrStyle} />
        </div>
    )
}

export default Slider
