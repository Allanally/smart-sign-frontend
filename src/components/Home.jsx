import React from 'react';
import logo from './logo.0cfaa4df.png';
import { Link, Routes, Route }from 'react-router-dom';
import  Login from "./Login";
const Home = () => {
    return ( 
        <div className="home-container"  >
                <img src={logo} alt="Smart sign" />
                <p>  Signing permissions has never been easier as today  </p>

                <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
                
                    <Link to="/login"><button>Get Started</button></Link>
                
        </div>
     );
}
 
export default Home;