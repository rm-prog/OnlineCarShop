

const HeaderNav = () => {

    // CSS styles

    const navBarStyle = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "baseline",
        padding: "10px",
        backgroundColor: "#FFDB3B"
    }

    const headerStyle = {
        width: "300px",
        textAlign: "center",
        fontSize: "2rem",
        fontFamily: "Stick No Bills, sans-serif",
        fontWeight: "500"
    }

    const logBtnStyle = {
        width: "170px",
        textAlign: "right",
        fontSize: "1.5rem",
        fontFamily: "Gemunu Libre, sans-serif"
    }

    const signBtnStyle = {
        width: "120px",
        textAlign: "center",
        fontSize: "1.5rem",
        fontFamily: "Gemunu Libre, sans-serif"
    }

    return (
        <nav style={navBarStyle}>
            <header style={headerStyle}>
                OnlineCarShop
            </header>
            <div style={logBtnStyle}>
                Log In
            </div>
            <div style={signBtnStyle}>
                Sign Up
            </div>
        </nav>
    )
}

export default HeaderNav
