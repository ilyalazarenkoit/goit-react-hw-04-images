import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal/Modal';
import './styles.css';

class App extends Component {
  state = {
    showModal: false,
    imageURL: '',
  };

  toggleModal = imageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ imageURL: imageURL });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <ImageGallery toggleModal={this.toggleModal}></ImageGallery>
        {this.state.showModal && (
          <Modal closeModal={this.closeModal}>
            <img width="700" height="500" src={this.state.imageURL} alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}

export { App };
