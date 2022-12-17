import { Component } from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

class GalleryItem extends Component {
  render() {
    return (
      <>
        {this.props.gallery.map(item => {
          return (
            <li
              className="ImageGalleryItem"
              key={item.id}
              onClick={() => this.props.toggleModal(item.largeImageURL)}
            >
              <img
                src={item.largeImageURL}
                className="ImageGalleryItem_image"
                alt={item.user}
              />
            </li>
          );
        })}
      </>
    );
  }
}

GalleryItem.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func,
};

export { GalleryItem };
