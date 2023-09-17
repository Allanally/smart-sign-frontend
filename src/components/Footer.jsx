import { FaYoutube, FaInstagram, FaTwitter,  FaFacebook} from 'react-icons/fa';
const Footer = () => {
    return ( 
        <div className="footer">
            <div>
            <h2>Get Started</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia explicabo quibusdam consequuntur officiis consectetur.
                </p>
            </div>
            <div>
            <div>
                <h2>Company</h2>
               <p>Privacy Policy</p>
               <p>Sitemap</p>
               <p>Careers</p>
               <p>Terms & Conditions</p>
                </div>
            </div>
            <div>
                <h2>Contact Us</h2>
                <p>+250790075138</p>
               <p>smart.sign@gmail.com</p>
               <div className='links'>
                   <a href="" className='icon red'><FaYoutube /></a>
             <a href="" className='icon purple'><FaInstagram /></a>
             <a href="" className='icon blue'><FaTwitter /></a>
             <a href="" className='icon blue'><FaFacebook /></a>
               </div>
            
                </div>
        </div>
     );
}
 
export default Footer;