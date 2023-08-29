import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";



const ViewDocs = () => {
    
    const [name, setName] = useState('');
    const [stream, setStream] = useState('');
    const [faults, setFaults] = useState(null);

    const handleSubmit = async (e) => {
        try {
            const { data } = await axios.post("http://localhost:1337/view", {
              name,
              stream,
            });
            console.log(data);
            setFaults(data);
          } catch (err) {
            console.log(err);
          }
    }

    

    return ( 
        <div>
        <Navbar />
        <div className="view"><br /><br />
           
            <br />
            <br />
            <div className="more">
            <label className="font" style={{marginLeft: "15%", fontSize: "30px", fontFamily: "Mukta, sans-serif",  fontWeight: "500"}}>Sort By</label><br /><br />
            <label className="font">Name: </label>
            <input type="text" className="text" placeholder="Enter Student Names"  value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <label className="font">Class: </label>
            <select value={stream} onChange={(e) => setStream(e.target.value)} >
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
            <option value="S6 PCM">S6 PCM</option></select><br />
            <br />
            <button style={{padding: '10px 40px 10px', background: 'rgb(4, 113, 255)', color: 'white', border: 'none', borderRadius: '5px'}} onClick={handleSubmit}>Search</button>
            </div>
        </div>
        <div className="view-content" >
            <h1 style={{ fontFamily: "Mukta, sans-serif", fontWeight: "500"}}>Queried Faults</h1>
            {faults && faults.map((fault) => (
                    <div key={fault._id} className="view-slight">
                        <p>Student Names: {fault.name}</p>
                        <p>Signing Date: {fault.date}</p>
                        <p>Case Type: {fault.type}</p>
                        <p>Issuer: {fault.issuer}</p>
                        <p>Message: {fault.message}</p>
                        <p>Affiliate: {fault.user}</p>
                    </div>
                ))}
        
        </div>
        </div>
     );
}
 
export default ViewDocs;
