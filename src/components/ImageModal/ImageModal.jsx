import Modal from "react-modal";
// import css from "./src/components/ImageModal/ImageModal.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default ImageModal;
