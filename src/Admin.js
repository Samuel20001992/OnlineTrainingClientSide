import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AdminSideBar from './AdminSideBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Card,CardMedia, CardContent, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Admin = () => {


 const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


   const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    <div>
    
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <AdminSideBar />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Admin Page
                        </Typography>
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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
         <Card style={{ margin: '20px', width: '300px', float: 'left' }}>
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
        <Card style={{ margin: '20px', width: '300px', float: 'left' }}>
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
        <Card style={{ margin: '20px', width: '300px', float: 'left' }}>
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
         <Card style={{ margin: '20px', width: '300px', float: 'left' }}>
                    <CardMedia
                        component="img"
                        height="200"
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYe4LNoC7wAvXeCOp3ogsfK25dHhV934zYQ&usqp=CAU'
            alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom component="div">
                            About Us <Button style={{marginLeft:'60px'}}>Learn More</Button>
                        </Typography>
          </CardContent>
        </Card>
         <img
          style={{width:'98.9vw', height:'47vh'}}
        src='https://erepublic.brightspotcdn.com/dims4/default/67cb64f/2147483647/strip/true/crop/940x490+0+68/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.amazonaws.com%2F7f%2F0f%2F8453a278e1b824d5ff0e78c222a6%2Fshutterstock-548778247.jpg'
  
      />  
      </div>
   
       </div>
  );
};
export default Admin;
