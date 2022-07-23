import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from './Footer';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import SlideShow from './SlideShow';

function Header() {
  return (
      <div>
        <Box sx={{ flexGrow: 1 }} className='pos'>
      <AppBar position="static" style={{ width:'100%', position:'fixed',backgroundColor:'white',zIndex: '999'}}>
        <Toolbar >

          <Typography  variant="p" component="div" style={{color:'black', fontSize:'25px'}} sx={{ flexGrow: 1 }}>
            Online Learning
          </Typography>
          <Typography  variant="p" component="div" style={{color:'black'}} sx={{ flexGrow: 1 }}>
            Topics
                  </Typography>
                  
               <div style={{width:'600px'}}>

                  </div>
            <a href="#home">
              <Typography  variant="p" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'', color:'grey'}}>
                Home
                </Typography>
                </a>
          <a href="#about">
              <Typography  style={{color:'grey'}} variant="p" component="div" sx={{ flexGrow: 1 }}>
                About
                </Typography>
              </a>
              <a href="#feedback">
            <Typography variant="p" style={{color:'grey'}} component="div" sx={{ flexGrow: 1 }}>
                FeedBack
                </Typography>
              </a>
              <a href="#testimonial">
            <Typography variant="p" style={{color:'grey', marginRight:'30px'}} component="div" sx={{ flexGrow: 1 }}>
                Testimonial
              </Typography>
              </a>
            
              <Link  to='/Login'>
                <Button  color='primary' className='btn btn-primary' variant='contained'>Login</Button>
              </Link>
              <Link  to='/Registration'>
                <Button color='primary' className='btn btn-primary' variant='contained' >Sign Up</Button>
                </Link>
        </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Header