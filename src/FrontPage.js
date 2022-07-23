import React from 'react'
import Header from './Header';
import Image from './image1.png';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import SlideShow from './SlideShow';
import { Grid } from '@mui/material';

function FrontPage() {
  return (
    <Grid container  spacing={0} style={{marginTop:'10px'}}>
      <Grid item xs={4} style={{ float:'left'}} >
        <Typography style={{ fontSize: '50px'}}>Logo</Typography>
        <img style={{ width: '60%', left: '0', float: 'left', zIndex: '1', position: 'absolute' }}
          src="https://img.freepik.com/free-photo/dark-eyed-international-student-posing-with-white-laptop-indoor-photo-male-freelancer-typing-keyboard_197531-20162.jpg?w=2000" alt="" />
      
      </Grid>
      
      
      <Grid item xs={8}  style={{top:'0',height:'80vh', backgroundColor:'#f0dfdf',float:'right'}} >
        <div className="d-flex" style={{marginTop:'10px'}}>
            <a href="#home">
              <Typography  variant="h6"  style={{marginLeft:'10px', color:'black'}}>
                Home
                </Typography>
            </a>
            <a href="#about">
              <Typography  style={{marginLeft:'10px',color:'black'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                About
                </Typography>
            </a>
              <a href="#feedback">
               <Typography variant="h6" style={{marginLeft:'10px',color:'black'}} component="div" sx={{ flexGrow: 1 }}>
                FeedBack
                </Typography>
              </a>
              <a href="#testimonial">
            <Typography variant="h6" style={{marginLeft:'10px',color:'black', marginRight:'30px'}} component="div" sx={{ flexGrow: 1 }}>
                 Stories
              </Typography>
              </a>
              
                
              <Link  to='/Login'>
                  <Button color='primary' style={{fontSize:'13px'}} className='btn btn-primary' variant='contained'>Login</Button>
                </Link>
               
           </div> 
        
        <Typography
          style={{
            fontSize: '25px',
            color: 'black',
            marginTop: '100px',
            marginLeft:'30px',
            zIndex: '2',
            position: 'absolute',
            textAlign:'left'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, atque esse accusamus neque fugit voluptas facere consectetur in similique culpa.
        </Typography>
      </Grid>
      <Grid item xs={4} style={{float:'left'}}>
        </Grid>
      
    </Grid>
  )
}

export default FrontPage