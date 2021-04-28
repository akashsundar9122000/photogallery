import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar'

const UploadForm = () =>{

    const [file , setFile] = useState(null);
    const [ error , setError] = useState(null);

    const types = ['image/png' , 'image/jpeg' , 'image/jpg'];

    const imageHandler=(event) =>{
        let image = event.target.files[0];
        if(image && types.includes(image.type)){
            setFile(image);
            setError(null);
        }
        else{
            setError("Please choose the image file.");
        }
    }
    return(
        <form>
            <input type = "file" onChange={imageHandler} className="input"/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
            
        </form>
    )
}

export default UploadForm;