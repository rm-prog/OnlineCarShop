import { useRef } from 'react'

import { BiSearchAlt } from 'react-icons/bi'
import { FormSelect } from "react-bootstrap"

import carsInfoJson from "../carLists/cars.json"

const FilteredSearch = ( { carsInfo, setCarsInfo, setSliderDisplay, setListDisplay } ) => {

    const carsInfoDefault = carsInfoJson

    // CSS styles

    const containerStyle = {
        // display: "flex",
        // alignItems: 'center',
        fontSize: "1.3rem",
        margin: "0 auto",
        paddingLeft: "15px",
        paddingRight: "15px",   
        width: "900px",
        height: "130px",
        backgroundColor: "#C2C2C2",
        borderRadius: "5px"
    }

    const rowStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "65px",
        alignItems: "center"
        // width: "100%"
    }

    const searchIconStyle = {
        fontSize: "2.5rem",
        cursor: "pointer",
        margin: "2px"
    }

    const formSelectStyle = {
        display: "inline-block", 
        width: "100px", 
        margin: "10px"
    }

    // Functions

    // filter cars array by all conditions
    // and hide card Sliders
    const filterBtnClick = (minYear, maxYear, minPrice, maxPrice, minMileage, maxMileage, fuel) => {
        carsInfo = carsInfoDefault
        setCarsInfo(
            carsInfo.filter((car) => {
            return car.year >= parseInt(minYear) &&
                   car.year <= parseInt(maxYear) &&
                   car.price >= parseInt(minPrice) &&
                   car.price <= parseInt(maxPrice) &&
                   car.mileage >= parseInt(minMileage) &&
                   car.mileage <= parseInt(maxMileage) &&
                   fuel == "Anything" ? true : car.fuel == fuel
        }))
        // Set display of card Sliders to none
        // and display of list of cars to grid
        setSliderDisplay("none")
        setListDisplay("grid")
    }

    // Ref Elements

    const minPriceSelect = useRef(null)
    const maxPriceSelect = useRef(null)
    const minYearSelect = useRef(null)
    const maxYearSelect = useRef(null)
    const minMileageSelect = useRef(null)
    const maxMileageSelect = useRef(null)
    const fuelSelect = useRef(null)

    return (
        <div style={containerStyle}>
            <div style={rowStyle}>
                <BiSearchAlt onClick={() => {
                    filterBtnClick(minYearSelect.current.value, maxYearSelect.current.value, minPriceSelect.current.value,
                        maxPriceSelect.current.value, minMileageSelect.current.value, maxMileageSelect.current.value,
                        fuelSelect.current.value)
                    }} style={searchIconStyle} />
                From Price($): <FormSelect ref={minPriceSelect} size='sm' style={formSelectStyle} >
                    <option> 4000 </option>
                    <option> 5000 </option>
                    <option> 6000 </option>
                    <option> 7000 </option>
                    <option> 8000 </option>
                    <option> 9000 </option> 
                </FormSelect>
                To: <FormSelect ref={maxPriceSelect} size='sm' style={formSelectStyle} >
                    <option> 100000 </option>
                    <option> 9000 </option>
                    <option> 8000 </option>
                    <option> 7000 </option>
                    <option> 6000 </option>
                    <option> 5000 </option>
                    <option> 4000 </option> 
                </FormSelect>
                From Year: <FormSelect ref={minYearSelect} size='sm' style={formSelectStyle} >
                    <option> 2005 </option>
                    <option> 2006 </option>
                    <option> 2007 </option>
                    <option> 2008 </option>
                    <option> 2009 </option>
                    <option> 2010 </option> 
                </FormSelect>
                To: <FormSelect ref={maxYearSelect} size='sm' style={formSelectStyle} >
                    <option> 2010 </option>
                    <option> 2009 </option>
                    <option> 2008 </option>
                    <option> 2007 </option>
                    <option> 2006 </option>
                    <option> 2005 </option> 
                </FormSelect>
            </div>
            <div style={rowStyle}>
                Mileage(km) from: <FormSelect ref={minMileageSelect} size='sm' style={formSelectStyle} >
                    <option> 10000 </option>
                    <option> 20000 </option>
                    <option> 30000 </option>
                    <option> 40000 </option>
                    <option> 50000 </option>
                    <option> 60000 </option> 
                </FormSelect>
                Mileage to: <FormSelect ref={maxMileageSelect} size='sm' style={formSelectStyle} >
                    <option> 60000 </option>
                    <option> 50000 </option>
                    <option> 40000 </option>
                    <option> 30000 </option>
                    <option> 20000 </option>
                    <option> 10000 </option> 
                </FormSelect>
                Fuel: <FormSelect ref={fuelSelect} size='sm' style={formSelectStyle} >
                    <option> Anything </option> 
                    <option> Diesel </option>
                    <option> Petrol </option>
                    <option> Electric </option>
                </FormSelect>
            </div>
        </div>
    )
}

export default FilteredSearch
