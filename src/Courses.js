import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Courses from './Courses';
import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse, getCourses, updateCourse } from './action/course.action';



function Course(props) {

  
  const [currentId, setCurrentId] = useState(0);
  
   const courseRows =  useSelector((state) => state.courseReducer);
  console.log(courseRows);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [currentId, dispatch]);

  const check = (course) => {
    console.log(props.categories)
    console.log(course.name)
              
    return  <Link to={'/Learn/' + course.name} style={{ margin: '20px', width: '310px', float: 'left' }}>
         
        <Card  style={{ margin: '20px', width: '310px', float: 'left' }}>
        
          <CardMedia
            component="img"
            height="140"
            image={course.image}
            alt="green iguana"
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.name}
            </Typography>
            <Typography gutterBottom variant="subtitle" component="div">
              {course.coursesCategory}
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        
        </Card>

      </Link>
    
  }

    return (
      courseRows.map((course) => {
        {
          if (props.categories == course.courseCategory) {
          return <div>
            {check(course)}
          </div>
           }}
   
      }

      )
    )
 
  
  
}
  


export default Course