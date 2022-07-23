import React from 'react'
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import SideBar from './SideBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Footer from './Footer';
function Profile() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
      <div style={{ boxShadow: '3px' }}>
          <AppBar position="static">
              <Container maxWidth="xl">
        <Toolbar disableGutters>
            <SideBar />
            <Link to="/HomePage">
            <Typography variant="h6" component="div" style={{color:'white'}}>
                 Home
            </Typography>
              </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                 Profile Page
           </Typography>
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

<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
        <center><Avatar
            alt="Remy Sharp"
            style={{width:'150px', height:"150px"}}
              src="data:image/jpeg;base64,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"
  
                  /></center> <br/>
          Bill Gates<br />
          Age:70<br/>
          Score : 99<br/>
          Gender:Male<br/>
          billage@gmail.com <br/>
          AASTU Education Institute<br/>
          Number of courses taken: 3<br />
          Number of Courses in progress: 2<br/><br/>
          <div style={{justifyContent:'center', textAlign:'justify', textJustify: 'inter-word'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae mollitia,<br />
            cumque perspiciatis non veritatis officiis animi doloribus. Aperiam enim magni architecto<br />
            minus nihil similique eos blanditiis repellendus quasi optio, assumenda, facere voluptas <br />
            distinctio in necessitatibus saepe totam ut. Eaque, adipisci. Earum consequuntur animi<br />
            neque ut vel minus optio beatae voluptates dolores id provident, error expedita reprehenderit,<br />
            distinctio necessitatibus perspiciatis tempore doloribus fugiat esse? Id, officiis! Exercitationem<br />
            ex animi beatae aperiam illum, molestiae impedit iure, perferendis officiis consequatur ab, temporibus<br />
            vel accusantium? Eveniet veritatis quas praesentium. Velit, repellendus animi ad hic cum asperiores <br />
            sint iusto architecto mollitia tempore neque. Nostrum odio quaerat, sunt reiciendis aliquid assumenda,<br />
            porro corrupti quam dolorum consequuntur cumque velit aperiam soluta consectetur cum repudiandae vel <br />
            quisquam. Deleniti eveniet pariatur recusandae, error, exercitationem sed unde consequatur placeat<br />
            eos esse fuga eum at? Labore deserunt quibusdam libero soluta minus ex, quos dicta repellat nesciunt <br />
            maiores itaque molestias blanditiis maxime dolores voluptas ratione iste reiciendis laudantium tenetur <br />
            aliquid esse officiis ea totam nihil. Excepturi quia itaque eum consectetur, unde numquam quae quis<br
            /> nostrum ipsa placeat quod illum nobis fuga ad voluptate tenetur autem quidem officiis atque ullam
            <br/>qui non! Porro, illo nisi voluptatum non tenetur animi iste velit quia?
          </div>
          

        </Grid>  
        <Grid item xs={12}>
                <Footer/>
        </Grid>      
   
</Grid> 
    
    </div>
  )
}

export default Profile