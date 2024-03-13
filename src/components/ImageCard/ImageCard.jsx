const ImageCard = ({ photo }) => {
  const { urls, description } = photo;
  console.log("Received image data:", photo);
  return (
    <div className="photo-card">
      <div className="image-wrapper">
        <img
          className="photo-card__img"
          src={urls.small}
          // data-src={regularImage}
          alt={description}
        />
      </div>
      {/* <div className="info">
        <p className="info-item">
          <b>Name:</b> <span>{photo.user.name}</span>
        </p>
        <p className="info-item">
          <b>Likes:</b> <span>{photo.likes}</span>
        </p>
        
      </div> */}
    </div>
  );
};

export default ImageCard;
