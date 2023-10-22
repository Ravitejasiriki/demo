 import React from 'react'
 
 const Collection = (props) => {
    const{title,image1,image2,image3,image4,image5,image6}=props.gentsFashion
   return (
     <div class="collectionsection">
       <h2>{title}</h2>
       
       <div className="menImages">
        <img src={image1}></img>
        <img src={image2}></img>
        <img src={image3}></img>
        <img src={image4}></img>
        <img src={image5}></img>
        <img src={image6}></img>
       </div>
     </div>
   )
 }
 
 export default Collection
 