import styles from './styles/App.module.css'

import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
} 
  from 'react-router-dom' 

import Home from './routes/Home'
import Login from "./routes/Login"
import SignUp from './routes/SignUp'
import CarInfo from './routes/CarInfo'
import HeaderNav from './components/HeaderNav'

import carDatabase from "./carLists/cars.json"

const App = () => {

    // CSS styles

    return (
        <Router>
          <HeaderNav />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/car/:car/:carname" element={<CarInfo />} />
          </Routes>
        </Router>
        )
}

export default App;
