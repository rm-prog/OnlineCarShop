import HeaderNav from "../components/HeaderNav";
import Introduction from '../components/Introduction';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <Introduction />
            <Slider sliderTitle="Trending Cars"/>
            <Slider sliderTitle="Newest"/>
            <Footer />
        </div>
    )
}

export default Home
