import { Form, 
    FormGroup, 
    FormLabel, 
    FormControl,
    FormText,
    Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const SignUp = () => {

    //  CSS styles 

    const formStyle = {
        border: "2px grey solid",
        borderRadius: "15px",
        margin: "10px",
        width: "440px",
        padding: "20px",
        backgroundColor: "#F7F4F4",
    }

    const formControlStyle = {
        width: "50%",
        display: "inline-block",
        margin: "5px"
    }

    const socialIconStyle = {
        margin: "15px",
        marginTop: "40px",
        marginBottom: "30px"
    }

    const socialIconsContainerStyle = {
        display: "flex",
        justifyContent: "center",
    }

    return (
        <center>
            <div style={formStyle}>
                <Form>
                    <h2>Sign Up</h2>
                    <FormGroup className="mb-3">
                        <FormLabel>First Name:</FormLabel>
                        <FormControl type="text" style={formControlStyle} placeholder="Enter your first name" /> <br/>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Last Name:</FormLabel>
                        <FormControl type="text" style={formControlStyle} placeholder="Enter your last name" /> <br/>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Email address:</FormLabel>
                        <FormControl type="email" style={formControlStyle} placeholder="Enter email" /> <br />
                        <FormText className="text-muted">
                            We'll never share your email with anyone else.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Username:</FormLabel>
                        <FormControl type="text" style={formControlStyle} placeholder="Enter username" /> <br />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" style={formControlStyle} placeholder="Password" />
                    </FormGroup>
                    <Link to='/' style={{ color: "inherit",textDecoration: "none" }}>
                        <Button variant="primary" type="button">
                            Submit
                        </Button>
                    </Link>
                    <div style={socialIconsContainerStyle}>
                        <SocialIcon style={socialIconStyle} url="https://www.facebook.com/"/>
                        <SocialIcon style={socialIconStyle} url="https://www.instagram.com/"/>
                        <SocialIcon style={socialIconStyle} url="https://www.twitter.com/"/>
                    </div>
                </Form>
            </div>
        </center>
    )
}

export default SignUp
