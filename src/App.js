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
import Login from "./routes/Login"
import SignUp from './routes/SignUp'
import HeaderNav from './components/HeaderNav'

const App = () => {

    // CSS styles

    return (
        <Router>
          <HeaderNav />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/search" element={<SearchCar/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
        )
}

export default App;
