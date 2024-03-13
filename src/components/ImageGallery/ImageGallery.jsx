import ImageCard from "./ImageGallery";

const ImageGallery = ({ photos }) => {
  console.log("Received image data:", photos);
  return (
    <ul className="image-gallery">
      {photos !== null &&
        photos.map((photo) => (
          <li key={photo.id}>
            <ImageCard photo={photo} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
