import logo from './logo.0cfaa4df.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
const Signup = () => {
   const navigate = useNavigate('');
   
 const [name, setName] = useState();
 const  [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const generateError = (err) => toast.error(err, {
    position: "bottom-right"
 })
 const handleSubmit = async(e) =>{
    e.preventDefault()
   try{
   const { data } =  await axios.post("http://localhost:1337/register", {
    name, email, password
   },{
    withCredentials: true
   });
   swal("user created")
   console.log(data);
   if(data) {
    if(data.errors){
      const {email, password} = data.errors;
      if(email) generateError(email);
      else if(password) generateError(password);
    }else{
       navigate("/login");
    }
   }
   }catch(err){
    swal("user not created")
   }
}
        
    return (  
       
        <div className="signup-container">
            <br /><br />
            <div className='form-cont'>
                 <div className="image">
                 <div className="image">
          <img src={logo} alt='logo' />
        </div>
        
            <h2>Signup</h2><br /></div>
                 <form onSubmit={handleSubmit}>
                 <label>Full Name</label><br /><br />
                <input type="text"  required value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Phone Number</label><br /><br />
                <input type="text"  required />
                <label>Email</label><br /><br />
                <input type="email"  required value={email} onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <label>Password</label>
                <br />
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
               

                <br /><br />
                <div className="butt">
                <button type='submit' >Sign Up</button>
                  
                    <br />
                    <br />
                       <p> Have An Account? {"  "}
                        <Link to="/login">Sign In</Link>
                    
                       </p>
                        
                </div>
                <br />
            </form>
            <ToastContainer />
        </div></div>
    );
}
 
export default Signup;