import {useState , useEffect} from 'react';
import {projectStorage , projectFireStore , timestamp} from '../Firebase/firebase_config';

const UseStorage = (file) =>{
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState(null);
    const [url , setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name) //to take reference of the file
        const collectionRef = projectFireStore.collection('images'); //creates image collection in database

        storageRef.put(file).on('state_change', (snap) =>{ //when the cahnge occurs
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //to take the progress of the pic uploading
            setProgress(percentage);
        }, (err)=>{ //to display when error occurs
            setError(err);
        }, async()=>{ //to get the url
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url , createdAt});
            setUrl(url);
        })
        
    }, [file])

    return {progress , url , error}; //we can use this in other components
}

export default UseStorage;
