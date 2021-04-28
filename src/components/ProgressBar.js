import React from 'react';
import UseStorage from '../Hooks/UseStorage';
import {useEffect} from 'react';

const ProgressBar=({file,setFile})=>{

    const {url , progress} = UseStorage(file) //now this will take the file to useEffect

    useEffect(() => {
       if(url){
           setFile(null);
       }
    }, [url , setFile])

    console.log(progress)
    return(
        <div className="progress-bar" style={{width : progress + '%'}}></div>
    )
}

export default ProgressBar;