import './App.css';
import Login from './Login';
import HomePage from './HomePage.js';
import SideBar from './SideBar';
import SingleCourses from './SingleCourses';

import {
  Route,
  Link,
  Router,
  Routes
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Registration from './Registration';
import Profile from './Profile';
import Admin from './Admin';
import CourseCards from './CourseCards';
import TopicManager from './TopicsManger';
import Learn from './Learn';
import Gallery from './Gallery';
import FrontPage from './FrontPage';
import Page from './Page';

//import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path={"/SingleCourses/:categorie"} element={<SingleCourses/>} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Learn/:course" element={<Learn/>} />
        <Route path="/Page" element={<Page/>} />

   </Routes>
    </div>
  );
}

export default App;
