import CarCard from "./CarCard"

const Slider = ( { cardsInfo } ) => {

    // CSS styles

    const sliderContainerStyle = {
        margin: "20px"
    }

    return (
        <div style={sliderContainerStyle}>
            <CarCard />
        </div>
    )
}

export default Slider
