import Button from 'react-bootstrap/Button'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        fontFamily: "Gemunu Libre, sans-serif"
    }

    const signBtnStyle = {
        width: "120px",
        textAlign: "center",
        fontFamily: "Gemunu Libre, sans-serif"
    }

    const sellBtnStyle = {
        width: "400px",
        textAlign: "right",
        paddingRight: "40px",
        fontFamily: "Gemunu Libre, sans-serif"
    }

    const searchCarBtnStyle = {
        width: "200px",
        textAlign: "left",
        fontFamily: "Gemunu Libre, sans-serif"
    }

    return (
        <nav style={navBarStyle}>
            <Link to='/' style={{ color: "inherit",textDecoration: "none" }}>
                <header style={headerStyle}>
                    OnlineCarShop
                </header>
            </Link>
            <div style={logBtnStyle}>
                <Link to='/login'>
                    <Button variant='light' size='lg' style={{fontSize: "1.4rem"}}>
                        Log In
                    </Button>
                </Link>
            </div>
            <div style={signBtnStyle}>
                <Link to="/signup">
                    <Button variant='light' size='lg' style={{fontSize: "1.4rem"}}>
                        Sign Up
                    </Button>
                </Link>
            </div>
            <div style={sellBtnStyle}>
                <Link to="/sell">
                    <Button variant='outline-warning' style={{color: "black", borderColor: "black", fontSize: "1.3rem"}}>
                        Sell your Car
                    </Button>
                </Link>
            </div>
            <div style={searchCarBtnStyle}>
                <Link to="/search">
                    <Button variant="outline-warning" style={{color: "black", borderColor: "black", fontSize: "1.3rem"}}>
                        <BiSearchAlt/> Search Cars
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default HeaderNav
