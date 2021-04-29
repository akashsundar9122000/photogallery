
import { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Model from './components/Model';
import Title from './components/Title';
import UploadForm from './components/UploadForm';



function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage}/>
      {selectedImage && <Model selectedImage = {selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
