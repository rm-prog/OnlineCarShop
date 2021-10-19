import styles from './styles/App.module.css'

import HeaderNav from "./components/HeaderNav";
import Introduction from './components/Introduction';
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    // CSS styles

    return (
        <>
          <HeaderNav />
          <Introduction />
          <Slider />
        </>
    )
}

export default App;
