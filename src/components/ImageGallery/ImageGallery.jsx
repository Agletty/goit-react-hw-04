import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  // console.log("Received image data:", photos);
  return (
    <ul className="image-gallery">
      {images !== null &&
        images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
