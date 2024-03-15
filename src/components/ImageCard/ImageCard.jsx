const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className="photo-card">
      <div className="image-wrapper">
        <img
          className="photo-card__img"
          src={urls.small}
          alt={alt_description}
        />
      </div>
      {/* <div className="info">
        <p className="info-item">
          <b>Name:</b> <span>{image.user.name}</span>
        </p>
        <p className="info-item">
          <b>Likes:</b> <span>{image.likes}</span>
        </p>
        
      </div> */}
    </div>
  );
};

export default ImageCard;
