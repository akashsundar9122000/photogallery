import React from 'react';
import UseFirestore from '../Hooks/UseFiresetore';

const ImageGrid = ({setSelectedImage} ) =>{
    const {docs} = UseFirestore('images'); //to get image from collection
   
    return(
        <div className="img-grid">
            {docs && docs.map((doc)=>(
                <div className="image-wrap" key = {doc.id} 
                onClick = {()=>setSelectedImage(doc.url)}>
                    <img src = {doc.url} alt="picture" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;