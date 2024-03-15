import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default ImageModal;
