import React,{useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import { AppBar, Toolbar } from '@mui/material';
import Image from './images.png';
import {  getUsers } from './action/user.action';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

const theme = createTheme();
  
export default function Login() {

const [currentId, setCurrentId] = useState(0);
  
 
  const [page, setPage] =useState('');
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);
const userInfo = useSelector((state) => (currentId ? state.userReducer.find((message) => message._id === currentId) : null));
  const [user, setUser] = useState({email:'', password:''});
  const userRows = useSelector((state) => state.userReducer);
  console.log(userRows)
 
  const handleSubmit = () => {
    console.log('submit')
    userRows.map((users) => {
      console.log(users.email)
      if (users.email == user.email) {
        if (users.password == user.password) {
          console.log(users.email)
          console.log(users.password)
          setPage('/HomePage');
          
        }
        
      }
      else {
          setPage('/Login')
        }
    })
  }

  return (
    <div style={{backgroundImage:Image}}>
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
    <ThemeProvider theme={theme}>
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
            Sign in
          </Typography>
          <Box component=""  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
                  autoFocus
                  value={user.email}
                  onChange={(e)=>setUser({...user, email: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={(e)=>setUser({...user, password: e.target.value})}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
         <Link to={page}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
                sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
            >
              Sign In
              </Button>
           </Link>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/Registration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
        </ThemeProvider>
        </form>
      </div>
  );
}