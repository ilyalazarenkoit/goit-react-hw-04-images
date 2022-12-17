import { Component } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../styles.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="Modal">{this.props.children}</div>
        <button className="close" onClick={() => this.props.closeModal()}>
          <AiOutlineCloseCircle className="icon" />
        </button>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.node,
};
export { Modal };
