import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUser, getUsers, updateUser } from './action/user.action';
import { AppBar, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


function Registration() {
 

const [userInfoData, setUserInfoData] = useState({ first_name: '', middle_name: '', last_name: '', email: '', password: ''});
const [currentId, setCurrentId] = useState(0);
const dispatch = useDispatch();


const clear = () => {
    setCurrentId(0);
    setUserInfoData({ first_name: '', middle_name: '', last_name: '', email: '', password: ''});
  };

const handleSubmit = async (e) => {
    e.preventDefault();
if (currentId === 0) {
    dispatch(createUser(userInfoData));
    console.log(userInfoData);
      clear();
    } else {
      dispatch(updateUser(currentId, userInfoData));
      clear();
    }
    
  };


    return (
        <div >
            <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar>

            <Link  to='/'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: 'black' }}>
                 Back
           </Typography>
                </Link>
              
        </Toolbar>
            </AppBar> 
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box  noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="first_name"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                        autoFocus
                                        value={userInfoData.first_name}
                                        onChange={(e) => setUserInfoData({ ...userInfoData, first_name: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="middle_name"
                                    required
                                    fullWidth
                                    id="middle_name"
                                    label="Middle Name | Father's Name"
                                        autoFocus
                                         value={userInfoData.middle_name}
                                        onChange={(e) => setUserInfoData({ ...userInfoData, middle_name: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                        autoComplete="family-name"
                                         value={userInfoData.last_name}
                                        onChange={(e) => setUserInfoData({ ...userInfoData, last_name: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                        autoComplete="email"
                                         value={userInfoData.email}
                                        onChange={(e) => setUserInfoData({ ...userInfoData, email: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                        autoComplete="new-password"
                                         value={userInfoData.password}
                                        onChange={(e) => setUserInfoData({ ...userInfoData, password: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Button sx={{ mt: 3, mb: 2 }} variant="contained"
                            fullWidth
                            color="secondary" onClick={clear} >Clear</Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/Login' >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                </Container>
                </form>
        </div>
    );
}
export default Registration