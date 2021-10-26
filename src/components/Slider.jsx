import CarCard from "./CarCard"

const Slider = ( { cardsInfo } ) => {

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
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
        </div>
    )
}

export default Slider
