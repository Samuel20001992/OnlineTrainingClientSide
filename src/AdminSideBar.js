import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
<style>
   
</style>

export default function AdminSideBar() {
  

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Courses', 'Discussion', 'Blog','Add Blog Post', 'Add Course','Add Course Category'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/* {index == 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );
const left = 'left';
  return (
    <div>
         
      <React.Fragment key={left} >
        <Button onClick={toggleDrawer(left, true)}>
          <MenuIcon style={{color:'white', padding: '10px'}}/>
          </Button>
          <SwipeableDrawer
            anchor={left}
            open={state[left]}
            onClose={toggleDrawer(left, false)}
          onOpen={toggleDrawer(left, true)}
          style={{ marginTop: '40px' }}
          >
            {list(left)}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
