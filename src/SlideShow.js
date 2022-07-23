import React from 'react'
import './slideshow.css';
function slideShow() {
  return (
      <div style={{height:'600px', width:'100%'}}>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{height:'600px', width:'100%'}} >
            <div class="carousel-inner"  style={{height:'600px', width:'100%'}}>
                 <div class="carousel-item active" data-bs-interval="1300" >
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBMi43-7UyHRnp3h5JtSiU41PFMCrSwRC5Q&usqp=CAU" class="d-block w-100 "  style={{height:'600px', width:'1200px'}} alt="..."/>
                 </div>
                 <div class="carousel-item" data-bs-interval="2000">
                      <img src="https://www.techmediasquare.com/wp-content/uploads/2020/01/Web-Development-Tech-Media-Square.jpeg" class="d-block w-100 "  style={{height:'600px', width:'1200px'}} alt="..."/>
                 </div>
                 <div class="carousel-item" data-bs-interval="2000">
                      <img src="https://thumbs.dreamstime.com/b/big-data-cyber-security-digital-network-protection-analysis-future-technology-background-concept-223687718.jpg" class="d-block w-100 "  style={{height:'600px', width:'1200px'}} alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                      <img src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/final-course-categories.jpg" class="d-block w-100 "  style={{height:'600px', width:'1200px'}} alt="..."/>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                      <img src="https://blog.thedigitalgroup.com/assets/uploads/lozingle_10032014.jpg" class="d-block w-100 h-150" alt="..."/>
                  </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
      </div>
  )
}

export default slideShow