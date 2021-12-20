import { Form, 
        FormGroup, 
        FormLabel, 
        FormControl,
        FormText,
        Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Login = () => {

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

    return (
        <center>
            <div style={formStyle}>
                <Form>
                    <h2>Login</h2>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
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
                    <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" style={formControlStyle} placeholder="Password" />
                    </FormGroup>
                    <Link to='/' style={{ color: "inherit",textDecoration: "none" }}>
                        <Button variant="primary" type="button">
                            Submit
                        </Button>
                    </Link>
                </Form>
            </div>
        </center>
    )
}

export default Login
