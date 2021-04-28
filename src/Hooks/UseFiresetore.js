import {useState , useEffect} from 'react';
import {projectFireStore} from '../Firebase/firebase_config';

const UseFirestore = (collection) =>{  //passing the collection as the argument to the component
    const [docs , setDocs] = useState([]);

    useEffect(() => {  //to run process when something changes in collection
       const unsub = projectFireStore.collection(collection) //getting collection

       .orderBy('createdAt' , 'desc') //to arrange pics in descending and by timestamp
       .onSnapshot((snap) => { //for realtime changes
           let documents = [];
           snap.forEach(doc =>{
               documents.push({...doc.data() , id:doc.id})
               
           });
           setDocs(documents);
       })

       return () => unsub(); //to unsubscribe whe not needed
    }, [collection])

    return{docs};
}

export default UseFirestore;