import { BiSearchAlt } from 'react-icons/bi'

const FilteredSearch = () => {

    // CSS styles

    const containerStyle = {
        display: "inline-block",
        fontSize: "2rem",
        margin: "0 auto",
        paddingLeft: "15px",
        paddingRight: "15px",   
        width: "auto",
        height: "65px",
        backgroundColor: "grey",
        borderRadius: "5px"
    }

    return (
        <div style={containerStyle}>
            <BiSearchAlt />
            <input/>
        </div>
    )
}

export default FilteredSearch
