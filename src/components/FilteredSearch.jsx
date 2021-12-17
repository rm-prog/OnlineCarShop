import { BiSearchAlt } from 'react-icons/bi'
import { FormSelect } from "react-bootstrap"

const FilteredSearch = () => {

    // CSS styles

    const containerStyle = {
        display: "flex",
        alignItems: 'center',
        fontSize: "1.3rem",
        margin: "0 auto",
        paddingLeft: "15px",
        paddingRight: "15px",   
        width: "1000px",
        height: "65px",
        backgroundColor: "#C2C2C2",
        borderRadius: "5px"
    }

    return (
        <div style={containerStyle}>
            <BiSearchAlt  style={ { fontSize: "2rem" } } />
            Minimum Year: <FormSelect size='sm' style={ { display: "inline-block", width: "100px", margin: "10px" } } >
                <option> 2005 </option>
                <option> 2006 </option>
                <option> 2007 </option>
                <option> 2008 </option>
                <option> 2009 </option>
                <option> 2010 </option> 
            </FormSelect>
            Maximum Year: <FormSelect size='sm' style={ { display: "inline-block", width: "100px", margin: "10px" } } >
                <option> 2005 </option>
                <option> 2006 </option>
                <option> 2007 </option>
                <option> 2008 </option>
                <option> 2009 </option>
                <option> 2010 </option> 
            </FormSelect>
            Brand: <FormSelect size='sm' style={ { display: "inline-block", width: "100px", margin: "10px" } } >
                <option> Mercedes-Benz </option>
                <option> BMW </option>
                <option> Toyota </option>
                <option> Ford </option>
                <option> Volkswagen </option>
            </FormSelect>
        </div>
    )
}

export default FilteredSearch
