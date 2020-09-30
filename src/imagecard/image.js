import React from 'react'
import './image.css'

const ImageCard = (props) =>{
    return(
        <div>
            <img alt="gallery pic"
             className="image-card"
              src={props.imageurl} 
        />
       </div>
    )
}
    


export default ImageCard;