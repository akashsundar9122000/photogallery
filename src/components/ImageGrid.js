import React from 'react';
import UseFirestore from '../Hooks/UseFiresetore';
import {motion} from 'framer-motion';
const ImageGrid = ({setSelectedImage} ) =>{
    const {docs} = UseFirestore('images'); //to get image from collection
   
    return(
        <div className="img-grid">
            
            {docs && docs.map((doc)=>(
                <motion.div className="image-wrap" key = {doc.id} 
                whileHover={{opacity:1}}
                layout //it will animate the layout when we add new pic
                onClick = {()=>setSelectedImage(doc.url)}>
                    <motion.img src = {doc.url} alt="picture" //to animate image when it is added
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;