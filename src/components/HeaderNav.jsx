

const HeaderNav = () => {

    // CSS styles

    const navBarStyle = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    }

    const headerStyle = {
        fontSize: "1.7rem"
    }

    const logBtnStyle = {
        fontSize: "1.2rem"
    }

    return (
        <nav style={navBarStyle}>
            <header style={headerStyle}>
                OnlineCarShop
            </header>
            <div style={logBtnStyle}>
                Log In
            </div>
            <div>
                Sign Up
            </div>
        </nav>
    )
}

export default HeaderNav
