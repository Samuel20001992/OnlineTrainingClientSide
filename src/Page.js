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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Gallery from './Gallery';

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./gallery.css";


function Page() {
  return (
      <Grid container spacing={0} style={{}}>
          <Grid item xs={6}>
               <Typography variant='h6'>Logo</Typography>
          </Grid>
          <Grid item xs={6}>
              <div className="d-flex" style={{marginTop:'10px'}}>
            <a href="#home">
              <Typography  variant="subtitle1"  style={{marginLeft:'10px', color:'black'}}>
                Home
                </Typography>
            </a>
            <a href="#about">
              <Typography  style={{marginLeft:'10px',color:'black'}} variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                About
                </Typography>
            </a>
              <a href="#feedback">
               <Typography variant="subtitle1" style={{marginLeft:'10px',color:'black'}} component="div" sx={{ flexGrow: 1 }}>
                FeedBack
                </Typography>
              </a>
              <a href="#testimonial">
            <Typography variant="subtitle1" style={{marginLeft:'10px',color:'black', marginRight:'30px'}} component="div" sx={{ flexGrow: 1 }}>
                 Stories
              </Typography>
              </a>
              
                
              <Link  to='/Login'>
                  <Button color='primary' style={{fontSize:'13px'}} className='btn btn-primary' variant='contained'>Login</Button>
                </Link>
               
           </div> 
        
          </Grid>
          <Grid item xs={12}>
              <img
                  style={{zIndex:'0'}}
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/10/Best_education_website_design_jpg_fr5CCeYR.jpg?auto=format&q=60&fit=max&w=930" alt="" />
          </Grid>
             <Card style={{backgroundColor:'white', zIndex:'1', marginTop:'200px',marginLeft:'50px',position:'absolute'}}>
                <CardContent>
                </CardContent>
                <CardActions>
                    <Button style={{color:'blue'}} size="small">Learn More</Button>
                </CardActions>
          </Card>
            
      
      
    </Grid>
  )
}

export default Page