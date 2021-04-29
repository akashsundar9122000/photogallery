import React from 'react';
import UseStorage from '../Hooks/UseStorage';
import {useEffect} from 'react';
import {motion} from 'framer-motion';

const ProgressBar=({file,setFile})=>{

    const {url , progress} = UseStorage(file) //now this will take the file to useEffect

    useEffect(() => {
       if(url){
           setFile(null);
       }
    }, [url , setFile])

    console.log(progress)
    return(
        <motion.div className="progress-bar" 
            initial= {{width:0}}
            animate={{width : progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;