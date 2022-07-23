import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import { Button, CardHeader, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createCourseCategorie, getCourseCategories, updateCourseCategorie } from './action/courseCategories.action';
import SingleCourses from './SingleCourses';
import Course from './Courses';

function CategorieCards(props) {


  const [currentId, setCurrentId] = useState(0);
  
  const categorieRows = useSelector((state) => state.courseCategorieReducer);
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseCategories());
  }, [currentId, dispatch]);
  
  const cat = useSelector((state) => (currentId ? state.courseCategorieategorieReducer.find((message) => message._id === currentId) : null));

  const clear = () => {
    setCurrentId(0);
    setCatData({ name: '', image: '', categoriesCategory: '' });
  };

  const [catData, setCatData] = useState({ name: '', image: '', categoriesCategory: '' });




  useEffect(() => {
    if (cat) setCatData(cat);
  }, [cat]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createCourseCategorie(catData));
      clear();
    } else {
      dispatch(updateCourseCategorie(currentId, catData));
      clear();
    }
  }
    
 
  

    return (
      categorieRows.map((categorie) => {
        return <Link to={"/SingleCourses/" + categorie.name }>
         
          <Card sx={{ maxWidth: 345 }} style={{ margin: '20px', width: '310px', float: 'left' }}>
        
            <CardMedia
              component="img"
              height="140"
              image={categorie.image}
              alt="green iguana"
            
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {categorie.name}
              </Typography>
              <Typography gutterBottom variant="subtitle" component="div">
                {categorie.categoriesCategory}
              </Typography>
            </CardContent>
            <CardActions>
          
              
        
            </CardActions>
        
          </Card>

        </Link>
      }
      )
    )
  }


export default CategorieCards