import styles from './styles/App.module.css'

import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Link
} 
  from 'react-router-dom' 

import Home from './routes/Home'
import SearchCar from './routes/SearchCar'
import HeaderNav from './components/HeaderNav'

const App = () => {

    // CSS styles

    return (
        <Router>
          <HeaderNav />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/search" element={<SearchCar/>} />
          </Routes>
        </Router>
        )
}

export default App;
