import React,{useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Header from './Header';
import { CardMedia, Card, CardContent, CardActions } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import {  TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTopic, getTopics, updateTopic } from './action/topic.action';
import Nav from './Nav';

export default function TopicManger(props) {

  
const [currentId, setCurrentId] = useState(0);
  
  const topicRows = useSelector((state) => state.topicReducer);
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopics());
  }, [currentId, dispatch]);
  const top = useSelector((state) => (currentId ? state.topicReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setTopData({ name: '', image: '', categoriesCategory: '' });
  };

  const [topData, setTopData] = useState({ name: '', image: '', categoriesCategory: '' });

 
  useEffect(() => {
    if (top) setTopData(top);
  }, [top]);


  return (
    <div>
      <Nav topicRows={topicRows} course={props.course}/>
      </div>
  )
  }
      

  