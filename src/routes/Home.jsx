import { useState } from 'react'

import Introduction from '../components/Introduction'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import FilteredSearch from "../components/FilteredSearch"
import carsInfo from "../carLists/cars.json"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    // State variables

    const [carsInfoArray, setCarsInfo] = useState(carsInfo) 

    return (
        <div>
            <Introduction />
            <FilteredSearch carsInfo={carsInfoArray} setCarsInfo={setCarsInfo}/>
            <Slider sliderTitle="Trending Cars" cardsInfo={carsInfoArray}/>
            <Slider sliderTitle="Newest" cardsInfo={carsInfoArray}/>
            <Footer />
        </div>
    )
}

export default Home
