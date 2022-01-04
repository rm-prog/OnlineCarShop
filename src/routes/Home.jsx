import HeaderNav from "../components/HeaderNav";
import Introduction from '../components/Introduction';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import carsInfo from "../carLists/cars.json"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <Introduction />
            <Slider sliderTitle="Trending Cars" cardsInfo={carsInfo}/>
            <Slider sliderTitle="Newest" cardsInfo={carsInfo}/>
            <Footer />
        </div>
    )
}

export default Home
