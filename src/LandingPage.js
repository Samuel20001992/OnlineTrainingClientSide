import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from './Footer';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import ReactPlayer from 'react-player';
import image from './image1.png';
import image1 from './image2.png';
import image2 from './image3.png';
import './gallery.css';
import Testimonial from './Testimonial';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import YoutubeEmbed from './YoutubeEmbed';
import Gallery from './Gallery';
 
export default function LandingPage() {

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'white',
  '&:hover': {
    backgroundColor:"white",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

    return (
      <div id='home'>
        <Grid container>
          <Grid item xs={12}>
           <Box sx={{ flexGrow: 1 }} className='pos'>
      <AppBar position="static" style={{ width:'100%', position:'fixed',backgroundColor:'white',zIndex:'999'}}>
        <Toolbar >

          <Typography  variant="p" component="div" style={{color:'black', fontSize:'25px'}} sx={{ flexGrow: 1 }}>
            Online Learning
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
        </Toolbar>
            </AppBar>
        </Box>
          </Grid>
          
          <Grid item xs={12}>
            <center>
              <Search style={{
              marginTop: '200px', top: '0', zIndex: '1', padding:'5px',
            position:'absolute', marginLeft:'400px', width:'50vw',
             borderRadius:'17em'
            }}>
            <SearchIconWrapper>
              <SearchIcon style={{marginBottom:'5px'}} />
            </SearchIconWrapper>
            <StyledInputBase
                  placeholder="Search…"
                style={{align:"left"}}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </center>
            <center>
              <img 
                style={{backgroundColor:'white',
                  marginTop: '300px', marginRight:'200px', top: '0',right:'0', zIndex: '1',
                  position: 'absolute', width: '70vw', boxShadow: ' 14px 17px white'
                }} src='https://img.freepik.com/free-vector/jury-giving-evaluation-showing-scorecards_74855-7339.jpg?size=626&ext=jpg&ga=GA1.2.1196147931.1654476044' />
              
            </center>
              <img
                  style={{zIndex:'0', width:'98.5vw'}}
                  src="https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?size=626&ext=jpg&ga=GA1.2.1196147931.1654476044" alt="" />
          </Grid>
          <Grid item xs={12} style={{marginTop:'40px', marginBottom:'10px'}}>
            
           
          </Grid>
          <div style={{marginTop:'220px', marginLeft:'75px',marginBottom:'50px', width:'45vw', float:'left'}}>
            <center><ReactPlayer
              url="https://www.youtube.com/watch?v=Hrd0NiWMIjk"
              autoplay
            /></center>
          </div>
          <div style={{marginTop:'220px',marginBottom:'50px', width:'45vw',  float:'left'}}>
            <center><ReactPlayer
              url="https://www.youtube.com/watch?v=Hnil5cRXNXs"
              autoplay
            /></center>
          </div>

          <div style={{marginBottom:'50px'}}>
              <img src={image} alt="" style={{width:'98.5vw'}}/>
            </div>
        
       <div className='clear'>
          <Card style={{ margin:'20px',marginLeft: '100px', width: '300px', float: 'left', marginBottom:'50px' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image='data:image/jpeg;base64,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'
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom component="div">
                            Number of Students : 100
                        </Typography>
                    </CardContent>
        </Card>
        <Card style={{ margin: '20px', width: '300px', float: 'left', marginBottom:'50px' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image='data:image/jpeg;base64,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'
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom component="div">
                            Number of Courses : 30
                        </Typography>
                    </CardContent>
        </Card>
        <Card style={{ margin: '20px', width: '300px', float: 'left' , marginBottom:'50px'}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image='https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/final-course-categories.jpg'
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom component="div">
                            Number of Fields : 10
                        </Typography>
                    </CardContent>
        </Card>
         <Card style={{ margin: '20px', width: '300px', float: 'left', marginBottom:'50px' }}>
                    <CardMedia
                        component="img"
                        height="200"
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDohk6pjUwTK3W4_alc1YeTEWi3LdIXGn33g&usqp=CAU'
            alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom component="div">
                  Learn More
                  </Typography>
          </CardContent>
        </Card>
          
            
            <Grid item xs={12}>
           <div id='about' style={{marginBottom:'50px'}}>
                <center><h1 style={{float:'left', color:'gray'}}></h1> <br/></center>
                <div>
                    <div style={{ float:'left', width:'300px',margin:'20px' ,textAlign:'left', marginLeft:'100px'}}>
                       <h3>A partner with legacy</h3>
                      <div style={{ fontFamily: 'Lavishly Yours' }}>
                        Delivering on the promise of K-12 digital transformation for more than 30 years
                      </div> 
                    </div>
                </div>    
                <div style={{ float:'left', width:'300px',margin:'20px',textAlign:'left'}}>
                    <h3>We believe</h3>
                    Educators, parents and students in K-12 have unique needs that aren’t being met by other learning platforms. Since 2010, we’ve been on a mission to improve K-12 teaching and learning around the world with next generation social technologies and iron-clad student data stewardship.
                </div>
                <div style={{ float:'left', width:'300px',margin:'20px',textAlign:'left'}}>
                   <h3>Focus on K-12</h3>
                    The founding Edsby team started building award-winning software for K-12 in 193.59 as the original architects of FirstClass®. This messaging and collaboration product was used by millions of students and teachers and was one of the earliest learning management systems.
                </div>
         
                <div style={{ float:'left', width:'300px', height:'250px',margin:'20px',textAlign:'left'}}>
                  <h3>Building big things the right way</h3>
                  We make scalable, reliable systems that work for small schools… and entire countries.
                </div>
          </div>
          </Grid>
            

            <Grid item xs={12}>
              <div style={{ fontSize: '100px', marginTop:'260px', marginBottom:'50px' }}>
                <center>
                  <Typography style={{ fontSize: '100px', width:'93.5vw' }}>
                
                      The perfect platform to boost <br/>your technical skills
                  </Typography>
                </center>
              </div>
            </Grid>
            <div style={{marginBottom:"50px"}}>
              <img src={image1} alt="" style={{width:'93.5vw'}}/>
            </div>
            <div>
               <img style={{width:'93.5vw', marginBottom:'20px'}} src="https://quotestats.com/topic/96037-quotes-about-successful-online-learning-418.jpg" alt="" />
            </div>
            <center>
              <div id='feedback' style={{ marginBottom: '50px', marginTop: '10px', width: '500px' }}>
              <label htmlFor="">Contact Us (Feed Back)</label>
                <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone number"
              label="Phone Number"
              type="phoneNumber"
              id="phoneNumber"
              autoComplete="current-phoneNumber"
              />
              <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
                  type="message"
                  multiline
              id="message"
              autoComplete="current-message"
              />
              <Button className='btn btn-primary' color='primary'  variant='contained'>Submit</Button>
            </div>
            </center>
            <div>

            </div>
            <center>
              <Typography style={{fontSize:'70px', marginBottom:'30px'}}>
                  Why Code?
              </Typography>
            </center>
            <div style={{marginBottom:'50px'}}>
              <img src={image2} style={{width:'93.5vw'}} alt="" />
            </div>
          <div>
            <img style={{width:'93.5vw'}} src="https://globalcodex.my/wp-content/uploads/2021/01/benefits-of-online-educationjpg-1-1024x1024.jpg" alt="" />
          </div>
          <div id='testimonial' style={{margin:'40px', marginBottom:'60px', width:'93.5vw'}}>
           <Testimonial/>

          </div>
          <div>
            <img style={{width:'93.5vw', marginBottom:'50px'}} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/ben-kolde-bs2Ba7t69mM-unsplash_1200x768.jpeg?qqvos7jjsYUObn0eq37guGX.u37HIXHd&size=1200:675" alt="" />
          </div>
          </div> 
          <Grid item xs={12}>
            <Gallery/>
          </Grid>
          <Footer />
          </Grid>
        </div>
  );
}



