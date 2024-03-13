import { useState, useEffect } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import fetchPhotos from "./components/servises/api";

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPhotos();
        console.log(data);

        setPhotos(data.photos);
        console.log(data.photos);

        setIsLoading(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {isError && <ErrorMessage />}

      {!photos || photos.length === 0 ? (
        <p>No images available</p>
      ) : (
        <ImageGallery photos={photos} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
