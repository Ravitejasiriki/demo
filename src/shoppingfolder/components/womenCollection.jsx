import React from 'react'

const WomenCollection = (props) => {
    const{title,image1,image2,image3,image4,image5,image6}=props.ladiesFashion
  return (
    <div>
      <div class="womenCollection">
        <h2>{title}</h2>
        <div className="bannersection">
        <div className="bannerbox"><img src="assets/LadiesBanner.gif"></img></div>
    </div>
        
        <div class="menImages">
        <img src={image1}></img>
        <img src={image2}></img>
        <img src={image3}></img>
        <img src={image4}></img>
        <img src={image5}></img>
        <img src={image6}></img>
        </div>
      </div>
    </div>
  )
}

export default WomenCollection
