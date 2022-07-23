import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Overlayed() {
  return (
    <div>
      <Card style={{
        top: '0', width: '300px',height:'230px', marginTop: '100px',
        boxShadow: ' 5px 10px 12px 13px #888888',
        marginLeft:'230px', zIndex:'3', position:'absolute'
      }}
      >
        <CardContent>
          <Typography gutterBottom component="div"
          style={{marginTop:'20px'}}>
            <center>Hello</center> 
          </Typography>
        </CardContent>
      </Card>
      <Card style={{
        top: '0', width: '400px',
        boxShadow: ' 5px 10px 12px 13px #888888',
        marginLeft:'80px'
      }}
      >
        <CardContent>
          <Typography gutterBottom component="div"
          style={{marginTop:'20px'}}>
            <center>Hello</center> 
          </Typography>
        </CardContent>
      </Card>
      <Card style={{
        top: '0', width: '500px',
        boxShadow: ' 5px 10px 12px 13px #888888', marginBottom: '100px',
        marginLeft:'27px'
      }}>
        <CardContent>
          <Typography gutterBottom component="div"
          style={{marginTop:'40px'}}>
            <center>Darak Haile</center> 
          </Typography>
        </CardContent>
      </Card>
      
    </div>
  )
}

export default Overlayed