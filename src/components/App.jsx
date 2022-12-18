import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal/Modal';
import './styles.css';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const toggleModal = imageURL => {
    setShowModal(!showModal);
    setImageURL(imageURL);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ImageGallery toggleModal={toggleModal}></ImageGallery>
      {showModal && (
        <Modal closeModal={closeModal}>
          <img width="700" height="500" src={imageURL} alt="" />
        </Modal>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
};
