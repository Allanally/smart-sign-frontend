import Navbar from "./Navbar";
import { Link } from 'react-router-dom';



const First = () => {
   
    return ( 
        <div className="first">
         <Navbar />
         <div className="container">
         <br />
         <h1>CHOOSE OPTIONS</h1><br /><br />
         <div className="butt">
            <button className="little">1</button> {"         "}
            <Link to="/permission">
            <button className="big"> Sign a permission to a student </button></Link><br /><br />
          
            <button className="little">2</button>{"         "}<Link to="/fault">
            <button className="big"> Sign a discipline issue </button></Link></div><br /><br />
         </div>
      
     
    </div>
  );

      }

export default First;