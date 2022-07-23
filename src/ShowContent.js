
import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { CardMedia, Card, CardContent, CardActions } from '@mui/material';
function ShowContent(props) {
    console.log('content')
  return (
    
       <div>
          {console.log('hey')}
          <Grid item xs={6} style={{ marginTop: '100px', marginLeft:'200px' }}>
            <Card style={{ width: '1100px' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.content.title}
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image={props.content.image}
                  alt="green iguana"
            
                />
                <Typography gutterBottom variant="subtitle" component="div">
                  {props.content.content}  
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'space-between' }}>
                {/* <Button color='secondary' variant='contained' className="btn btn-primary" style={{ padding: '10px 40px' }}>Previous</Button>
                <Button color='primary' variant='contained' className="btn btn-primary" style={{ padding: '10px 40px' }}>Next</Button> */}
              </CardActions>
        
            </Card>
          </Grid>
        
      
      </div >
  )
}

export default ShowContent




 