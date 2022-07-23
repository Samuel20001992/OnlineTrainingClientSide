import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from './Header';
import { CardMedia, Card, CardContent, CardActions } from '@mui/material';
import TopicManger from './TopicsManger';
import { useParams } from 'react-router-dom';

export default function Learn() {
const { course } = useParams();

  return (
      <div>
           <Grid container>
              <Grid item xs={12}>
                  <Header/>
              </Grid>
              <TopicManger course={course}/>
            </Grid>
      
    </div>
  );
}
