import Navbar from "./Navbar";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
const Fault = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [issuer, setIssuer] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const [stream, setStream] = useState('');

   const navigate = useNavigate('');

   const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:1337/fault', {
        name, date, type, issuer, message, user, stream
      })
      .then(result => {
         console.log(result);
         swal("Successfully signed");
         navigate('/first');
       })
      .catch(err => {
         console.log(err);
         swal("Failed to Sign!!!!");
       });
  }
          

    return ( 
        <div className="fault-container">
            <Navbar />
           <div className="fault">
            <h1>Discipline Signing Form</h1>
            <br />
            <form onSubmit={handleSubmit}>
            <label className="font" >Student Names</label><br />
                <input type="text" className="names" placeholder="Eg: Ganza Hodari" required value={name} onChange={(e) => setName(e.target.value)}/><br /><br />
               <div>
                <label className="font">Signing Date</label><br /><br />
                <input type="date" onChange={(e) => setDate(e.target.value)} required /><br /><br />
               </div>
               <div className="flexing">
                  <div className="select1">
                  <label className="font" >Case Type</label><br /><br />
                  <select value={type} required onChange={(e) => setType(e.target.value)}>
                     <option value="Initiative">Initiative</option>
                     <option value="Advice">Advice</option>
                     <option value="Fault">Fault</option>
                  </select>
                  </div>
                  <div className="select2">
                  <label className="font" >Issuer</label><br /><br />
                  <select value={issuer} required onChange={(e) => setIssuer(e.target.value)} >
                     <option value="Disciple Prefect">Discipline Prefect</option>
                     <option value="patron">Patron</option>
                     <option value="matron">Matron</option>
                  </select>
               </div>
               </div>
               
               <div>
                  <label className="font">Message</label><br /><br />
                  <textarea name="" id="" cols="35" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br /><br />
               </div>
               <div className="select3">
               <label className="font" >Class</label><br /><br />
               <select value={stream} required onChange={(e) => setStream(e.target.value)}>
               <option value="S1 A">S1 A</option>
            <option value="S1 B">S1 B</option>
            <option value="S1 C">S1 C</option>
            <option value="S1 D">S1 D</option>
            <option value="S2 A">S2 A</option>
            <option value="S2 B">S2 B</option>
            <option value="S2 C">S2 C</option>
            <option value="S2 D">S2 D</option>
            <option value="S3 A">S3 A</option>
            <option value="S3 B">S3 B</option>
            <option value="S3 C">S3 C</option>
            <option value="S3 D">S3 D</option>
            <option value="S4 MCB">S4 MCB</option>
            <option value="S4 MPC">S4 MPC</option>
            <option value="S4 MPG">S4 MPG</option>
            <option value="S4 PCB">S4 PCB</option>
            <option value="S4 PCM">S4 PCM</option>
            <option value="S5 MCB">S5 MCB</option>
            <option value="S5 MPC">S5 MPC</option>
            <option value="S5 MPG">S5 MPG</option>
            <option value="S5 PCB">S5 PCB</option>
            <option value="S5 PCM">S5 PCM</option>
            <option value="S6 MCB">S6 MCB</option>
            <option value="S6 MPC">S6 MPC</option>
            <option value="S6 MPG">S6 MPG</option>
            <option value="S6 PCB">S6 PCB</option>
            <option value="S6 PCM">S6 PCM</option>
            </select><br /><br />
               </div>
               <div>
                  <label className="font">Affiliate</label><br /><br />
                  <input type="text" required placeholder="Enter The Affiliates Name" value={user} onChange={(e) => setUser(e.target.value)}/>
               </div>
               <br />
               <button type="submit">SIGN</button><br /><br />
            </form>
           </div>
        </div>
     );
}
 
export default Fault;