import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTopic, getTopics, updateTopic } from './action/topic.action';
import SingleCourses from './SingleCourses';
import Course from './Courses';

function Topic(props) {


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
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createTopic(topData));
      clear();
    } else {
      dispatch(updateTopic(currentId, topData));
      clear();
    }
  }
    
  console.log(topicRows)


    return (
      topicRows.map((topic) => {
          return <center>
             
              
          <Card sx={{ maxWidth: 800 }} style={{ margin: '20px', width: '800px', height:'600px', marginLeft:'400px'}}>
        
            <CardMedia
              component="img"
              height="300"
              image={topic.image}
              alt="green iguana"
            
                    />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {topic.title}
              </Typography>
              <Typography gutterBottom variant="subtitle" component="div">
                {topic.content}
              </Typography>
            </CardContent>
            <CardActions>
          
              
        
            </CardActions>
        
          </Card>
        
        </center>
      }
      )
    )
  }


export default Topic