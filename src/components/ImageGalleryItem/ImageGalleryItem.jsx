import '../styles.css';
import PropTypes from 'prop-types';

export const GalleryItem = ({ toggleModal, gallery }) => {
  return (
    <>
      {gallery.map(item => {
        return (
          <li
            className="ImageGalleryItem"
            key={item.id}
            onClick={() => toggleModal(item.largeImageURL)}
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
};

GalleryItem.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      user: PropTypes.string,
    })
  ),
  toggleModal: PropTypes.func,
};
