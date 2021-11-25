import styles from './styles/App.module.css'

import HeaderNav from "./components/HeaderNav";
import Introduction from './components/Introduction';
import Slider from './components/Slider';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaArrowAltCircleLeft } from "react-icons/fa"

const App = () => {

    // CSS styles

    return (
        <>
          <HeaderNav />
          <Introduction />
          <Slider sliderTitle="Trending Cars"/>
          <Slider sliderTitle="Newest"/>
          <Footer />
        </>
        )
}

export default App;
