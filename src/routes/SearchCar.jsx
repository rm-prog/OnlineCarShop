import Introduction from "../components/Introduction"
import FilteredSearch from "../components/FilteredSearch"
import Slider from "../components/Slider"
import Footer from "../components/Footer"

const SearchCar = () => {
    return (
        <div>
            <Introduction />
            <FilteredSearch />
            <Slider sliderTitle="Search for your car" />
            <Footer />
        </div>
    )
}

export default SearchCar
