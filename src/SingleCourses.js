import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SideBar from './SideBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Courses from './Courses';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Link, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Footer from './Footer';
import { Grid } from '@mui/material';
const SingleCourses = (props) => {

  const { categorie } = useParams();
 const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      {console.log(categorie)} 
    <AppBar position="static" style={{backgroundColor:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
                      <SideBar />
           <Link to='/'>
            <Typography variant="h6" component="div"  style={{color:'grey', marginRight:'20px'}}>
            Home
              </Typography>
            </Link>
            <Typography variant="h6" component="div"  style={{color:'black', marginRight:'550px'}}>
            Courses
            </Typography>
             <div style={{width:'600px'}}>

                  </div>
            <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          <Menu
              sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
               keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              >
                  <Link to="/Profile">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                   </MenuItem>
                 </Link>
                   <Link to="/">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                   </MenuItem>
                 </Link>
          </Menu>
          </Box>
        </Toolbar>
        </Container>
        </AppBar>
   
      <div>
        <Courses categories = {categorie}/> 
      </div>
      <Grid container>
        <Grid item xs={12}>
          
      <div>
        <Footer/>
        </div>
        </Grid>
      </Grid>
        
       </div>
  );
};
export default SingleCourses;
