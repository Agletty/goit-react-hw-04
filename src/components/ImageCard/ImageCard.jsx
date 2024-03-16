const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <div onClick={() => openModal(image)}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
