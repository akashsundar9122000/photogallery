import React from 'react';
import {motion} from 'framer-motion';
const Model = ({selectedImage , setSelectedImage}) =>{
    return(
        <motion.div className="imageextender" onClick={(e) =>{
            if(e.target.classList.contains('imageextender')){ //if the image is clicked while in zoom it wont close because it closes only when outside of the image is clicked
                setSelectedImage(null);
            }
           
        }}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src = {selectedImage} alt = "extetended image"
                initial={{y:"-100vh"}}  //this will bring the image from top when clicked
                animate={{y:0}}  
            />
        </motion.div>
    )
}

export default Model;