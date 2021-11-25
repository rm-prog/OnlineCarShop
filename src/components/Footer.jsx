import { SocialIcon } from "react-social-icons"

const Footer = () => {

    // CSS styles

    const footerStyle = {
        display: "flex",
        justifyContent: "center",
        background: "rgb(219,216,216)",
        background: "linear-gradient(0deg, rgba(219,216,216,1) 0%, rgba(255,255,255,1) 100%)",
    }

    const socialIconStyle = {
        margin: "15px",
        marginBottom: "80px"
    }

    return (
        <div style={footerStyle}>
            <SocialIcon style={socialIconStyle} url="https://www.facebook.com/"/>
            <SocialIcon style={socialIconStyle} url="https://www.instagram.com/"/>
            <SocialIcon style={socialIconStyle} url="https://www.twitter.com/"/>
        </div>
    )
}

export default Footer
