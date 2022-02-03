import { useState } from 'react'

import Introduction from '../components/Introduction'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import FilteredSearch from "../components/FilteredSearch"
import List from '../components/List'
import carsInfo from "../carLists/cars.json"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    // State variables

    const [carsInfoArray, setCarsInfo] = useState(carsInfo) 
    const [displaySliders, setDisplaySliders] = useState("block")
    const [displayList, setDisplayList] = useState("none")

    return (
        <div>
            <Introduction />
            <FilteredSearch carsInfo={carsInfoArray} setCarsInfo={setCarsInfo} setSliderDisplay={setDisplaySliders} setListDisplay={setDisplayList}/>
            <Slider sliderTitle="Trending Cars" cardsInfo={carsInfoArray} sliderDisplay={displaySliders}/>
            <Slider sliderTitle="Newest" cardsInfo={carsInfoArray} sliderDisplay={displaySliders}/>
            <List cardsInfo={carsInfoArray} listDisplay={displayList}/>
            <Footer />
        </div>
    )
}

export default Home
