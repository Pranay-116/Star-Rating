import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './Star.css';


const StarRating = () => {
   const [rating,setRating] = useState(0);
   const [hover,setHover] = useState(null);
   return (
    <div className>
      {[...Array(5)].map((star, index)=>{
        const currentRating = index+1;
        console.log("Rating is",rating);
        console.log("Hover is ",hover);
        
        return (
          <label key={index}>
          <input type="radio" name="rating" value={currentRating} onClick={() =>setRating(currentRating)}/>
          <FaStar className= 'star' size={50}
          color ={currentRating<=(hover || rating)? "#ffc107" : "#e4e5e9"}
          onMouseEnter={() =>setHover(currentRating)}
          onMouseLeave={()=>setHover(null)}/>
          </label>
        )
      })}
     <p>Your rating is {rating}</p>
    </div>
   )
  
}

export default StarRating
