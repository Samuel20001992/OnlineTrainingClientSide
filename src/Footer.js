import { Divider } from '@mui/material'
import React from 'react'
import { FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function Footer() {
    return (
        <div >
        
            <div style={{marginTop: '50px', marginLeft:'50px', marginBottom:'20px', float:'left', marginRight:'0px'}} >
          
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZDnY34tkwvvHct_53Dwg7OJMKDqavPA0bQ&usqp=CAU" alt="" />
             <div style={{marginTop:'20px'}}>2022 © ClassTrack. All Rights Reserved.</div>
            </div>
            <div style={{float:'left', width: '200px',textAlign:'left', marginTop:'50px', marginLeft:'150px'}}>
                Headquarters <br />
                3507-9981 Whalley Blvd,<br />

                Surrey BC, V3T 0G6 <br />

                Canada <br />
             </div>
             <div style={{float:'left', width: '200px',textAlign:'left', marginTop:'50px', marginRight:'100px', marginLeft:'60px'}}>
                Contact Us<br />

                Toll-free: +1 (877) 337-0070<br />
                Phone: +1 (416) 800-7574<br />

                info@classtrack.com <br />
                
              </div>

              <div style={{float:'left', width: '200px',textAlign:'left', marginTop:'50px'}}>
                            Legal links <br />
                       Privacy Policy <br />

                          Terms & Conditions <br />
             </div>
             <div style={{float:'left', width: '200px', marginTop:'50px'}}>
                Follow Us<br />
                <FaFacebook style={{width:'30px', height:'40px'}} />
                <FaInstagram style={{width:'30px', height:'40px', marginLeft: '10px'}} />
                <FaTwitter style={{width:'30px', height:'40px', marginLeft: '10px'}} />
                <FaTelegram style={{width:'30px', height:'40px', marginLeft: '10px'}}  />
            </div>

   
      </div>
  )
}

export default Footer