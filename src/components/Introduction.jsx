import carImage from "../carImages/Audi-A3-Germany-February-2021.-Picture-autobild.de_.jpg"

const Introduction = () => {

    // CSS styles

    const introContainerStyle = {
        // background: "rgb(0,0,0)",
        // background: "linear-gradient(0deg, rgba(110,107,107,1) 0%, rgba(20,20,19,1) 100%)",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("${carImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "black",
        textAlign: "center",
        padding: "40px"
    }

    return (
        <div style={introContainerStyle}>
            <div style={{ fontFamily: "Courier New", fontSize: "2.3rem" }}> About Us </div>
            <p style={{ fontFamily: "Lucida Sans Unicode", fontSize: "1.2rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    )
}

export default Introduction
