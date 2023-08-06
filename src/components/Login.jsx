import { useState} from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from './logo.0cfaa4df.png';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

  const navigate = useNavigate('');
   
  const  [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const generateError = (err) => toast.error(err, {
    position: "bottom-right"
 })


  const handleSubmit = async (e) =>{
     e.preventDefault()
    
     try{
     const { data } =  await axios.post("http://localhost:1337/login", {
       email, password
     },{
      withCredentials: true
     });
     console.log(data);
     if(data) {
      if(data.errors){
        const {email, password} = data.errors;
        if(email) generateError(email);
        else if(password) generateError(password);
      }else{
         navigate("/first");
      }
     }
     }catch(err){
      swal("Check Password or Email")
     }
    }
    
  return (
    
      <div className="login-container">
        <br />
        <br />
      
        <br />
        <div className='form-cont'>
            <div className="image">
          <img src={logo} alt='logo' />
          <h2>Login</h2>
        </div>
          <form onSubmit={handleSubmit}>
            <label>Email</label><br />
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <label>Password</label>
            <br /><br />
            <input type="password" required  value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br /><br />
            <div className="butt">
                
          <button type='submit' >LOGIN</button>
              
              <br />
            
              <Link to="/signup">
                <p>Sign up</p>
              </Link>
            </div>
            <br />
          </form>
          <ToastContainer />
        </div>
      </div>
   
  );
};

export default Login;

