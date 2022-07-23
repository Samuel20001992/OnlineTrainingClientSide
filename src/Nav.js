import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import ShowContent from './ShowContent';
function Nav(props) {
    var cont;
    const handleContent = (topic) => {
        cont = topic;
        console.log('hC')
        console.log(topic)
        console.log(cont)
    }
    const basic = (topic) => {
        if (topic.status == "Basic") {
            return <Button onClick={handleContent(topic)} className=" topic" style={{ color: 'black', width: '100%' }}>
                {
                    console.log('basic')}
       
                {/* <AccordionDetails>
                    {topic.title}
                </AccordionDetails> */}
            </Button>
        }
    }
  
    const intermidate = (topic) => {
        if (topic.status == 'Intermidate') {
            return <Button onClick={handleContent(topic)} className=" topic" style={{ color: 'black', width: '100%' }}>
                {/* <AccordionDetails>
                    {topic.title}
                </AccordionDetails> */}
            </Button>
        }
    }

    const advanced = (topic) => {
        if (topic.status == 'Advanced') {
            return <Button onClick={handleContent(topic)} className=" topic" style={{ color: 'black', width: '100%' }}>
                {/* <AccordionDetails>
                    {topic.title}
                </AccordionDetails> */}
            </Button>
        }
    }

    return (
    
        props.topicRows.map((topic) => {
            {
                console.log('nav')
                console.log(topic.language)
                if (topic.language == props.course) {
                    return <div>
                        {console.log('ola')}
                        <Grid container spacing={2}>
                        <Grid item xs={4} style={{ marginTop: '100px' }}>
                            {/* <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Basic</Typography>
                                </AccordionSummary> */}
              
                                {basic(topic)}
  
                            {/* </Accordion> */}
                            {/* <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Intermidate</Typography>
                                </AccordionSummary> */}
                                {intermidate(topic)}
                            {/* </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Advanced</Typography>
                                </AccordionSummary> */}
                                {advanced(topic)}
                            {/* </Accordion> */}
                            </Grid>
                            <Grid xs={12} style={{ width: "950px" }}>
                                
                                <ShowContent content={cont} /></Grid>
                            
                            </Grid>
                    </div>
                }
            }
        })
    )
}

export default Nav





 
  

