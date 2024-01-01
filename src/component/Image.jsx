
import React, { useState, useEffect } from 'react';
import { storage } from '../../src/appwriteConfig.js' // Adjust the path to your Appwrite config file

const Image = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {

    const downloadFile = async () => {
      try {
        const result = await storage.getFileDownload(
          '65906c397acc778e375c',
          '01'
        )
        setImageUrl(result) // Update the state with the image URL
      } catch (error) {
        console.error(error);
      }
    };

    // Call the downloadFile function when the component mounts
    downloadFile();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Appwrite Image" crossOrigin="anonymous" />
      )}
    </div>
  )
};

export default Image;
