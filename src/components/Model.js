import React from 'react';

const Model = ({selectedImage , setSelectedImage}) =>{
    return(
        <div className="imageextender" onClick={(e) =>{
            if(e.target.classList.contains('imageextender')){ //if the image is clicked while in zoom it wont close because it closes only when outside of the image is clicked
                setSelectedImage(null);
            }
           
        }}>
            <img src = {selectedImage} alt = "extetended image"/>
        </div>
    )
}

export default Model;