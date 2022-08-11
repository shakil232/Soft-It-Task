
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import DashBoard from './Components/DashBoard/DashBoard';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// <FontAwesomeIcon icon={faCoffee} />

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* normal routes  */}
          <Route exact path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>

        
          {/* normal routes  */}
          {/* <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} /> */}

          {/* private-routeas  */}
          {/* <Route element={<PrivateRoute />} >
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/review" element={<BookingReview />} />
            <Route path="/dashBoard/*" element={<DashBoard />} />
          </Route> */}

          {/* all-match and error route  */}
          {/* <Route path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} /> */}
        
      </Router>
    </>
  );
}


export default App;
