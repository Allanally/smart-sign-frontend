import Navbar from "./Navbar";
import React, { useState } from "react";
import QRCode from "qrcode.react";
import { IoMdExit } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import jsPDF from "jspdf";
import Footer from "./Footer";
import axios from "axios";



const Permission = () => {
  const navigate = useNavigate('')

  const [name, setName] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [departTime, setDepartTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [issuer, setIssuer] = useState('');
  const [reason, setReason] = useState('');
  const [stream, setStream] = useState('');

  const [qrcodeData, setQRCodeData] = useState(null); 
  
  


  const handleSubmit = (e) => {
  
  e.preventDefault()

  const data = `Student Names: ${name}
  Departure Date: ${departDate}
  Departure Time: ${departTime}
  Return Date: ${returnDate}
  Return Time: ${returnTime}
  Issuer: ${issuer}
  Reason: ${reason}
  Class: ${stream}`;
  
  setQRCodeData(data);


  axios.post('http://localhost:1337/pendings', {
    name, departDate,departTime, issuer, reason, stream
  })
  .then(result => {
    console.log(result);
  })
 .catch(err => {
    console.log(err);
    swal("Failed to Permit!!!!");
  });


  showCode();
  };
  const showCode = () =>{
    const qrcode = document.getElementById('qrcode');
    const btn = document.querySelector('.btn');
    const invoke = document.querySelector('.button');
  
    
  
    invoke.addEventListener('click', function(){
      swal({
        title: "Permission granted",
        icon: "success",
        closeOnEsc: false,
        allowOutsideClick: false,
        button: true,
      })
      qrcode.style.display = 'block';
    })
    btn.addEventListener('click', function(){
      qrcode.style.display = 'none';
     })
  }

   
  const handleClick = () => {
    const heading = "Permission Form";
    const data = `Student Names: ${name}
    Departure Date: ${departDate}
    Departure Time: ${departTime}
    Return Date: ${returnDate}
    Return Time: ${returnTime}
    Issuer: ${issuer}
    Reason: ${reason}
    Class: ${stream}`;
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.setFontSize(20);
    pdf.text(heading, 105, 20, null, null, "center");
    pdf.setFontSize(15);
    pdf.text(data, 45, 30); 
  
    pdf.save(`${name}_permission_name`);
    navigate('/first')
}

  return (
    <div className="permission-container">
      <Navbar />
      <div className="permission">
        <form onSubmit={handleSubmit}>
          <h1>Permission Form</h1>
          <br />
<label className="font" >Student Names</label><br />
<input type="text" className="names" required placeholder="Eg: Ganza Hodari" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
<div className="flexing">
<div className="depart-date">
    <label className="font"  >Departure Date</label>
    <br /><br />
    <input type="date" required value={departDate}
onChange={(e) => setDepartDate(e.target.value)} /><br />
</div>
<div className="depart-time">
<label className="font">Departure Time</label>
    <br /><br />
    <input type="time" required  value={departTime}
onChange={(e) => setDepartTime(e.target.value)} /><br />
</div>
</div>
<div className="flexing" >
<div className="expect-date">
<label className="font">Return Date</label>
    <br /><br />
    <input type="date" required  value={returnDate}
onChange={(e) => setReturnDate(e.target.value)}/><br />
</div>
<div className="expect-time">
<label className="font"> Return Time</label>
    <br /><br />
    <input type="time" required  value={returnTime}
onChange={(e) => setReturnTime(e.target.value)} /><br />
</div>
</div>
<div className="flexing">
  <div className="issuer">
<label className="font">Issuer</label>
    <br /><br />
   
   <select  value={issuer} onChange={(e) => setIssuer(e.target.value)} required >
    <option value="Discipline-Prefect">Discipline Prefect</option>
    <option value="Patron">Patron</option>
    <option value="Metron">Metron</option>
   </select>
</div>
<div className="depart-reason">
<label className="font">Reason</label>
    <br /><br />
    <select  value={reason}  onChange={(e) => setReason(e.target.value)} required >
    <option value="Medical Care">Medical Care</option>
    <option value="Family Issues">Family Issues</option>
    <option value="Other">Other</option>
   </select>
</div><br />
</div>

<div className="" style={{marginBottom: "10px", marginTop: "10px"}}>
<label className="font">Class</label>
    <br /><br />
    <select value={stream} onChange={(e) => setStream(e.target.value)}>
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
            </select>
</div>
<button onClick={showCode} type="submit" className="button">SIGN</button><br /><br/>
         
        </form>
         <div id="qrcode">
          <button className="btn"><IoMdExit /></button>
          <div className="qrcode-container">
            <h1>{name}</h1>
            <h2 style={{ fontFamily: "Mukta, sans-serif", fontWeight: "300"}}>Scan The QrCode below to get your permission </h2>
            <div className="real">
         {qrcodeData && (
            <QRCode
              value={qrcodeData}
              size={200}
              level="H" style={{ padding: "20px", border: "1px solid rgb(4, 113, 255)", borderRadius: "5px"}} />
          )}
          <br />
          <button onClick={handleClick} className="button">Print</button>
          </div>
          </div>
         </div>
        </div>
        <Footer />
    </div>
  );
};


export default Permission;

