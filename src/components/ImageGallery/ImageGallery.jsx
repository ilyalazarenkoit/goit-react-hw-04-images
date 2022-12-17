import { Component } from 'react';
import '../styles.css';
import { Searchbar } from '../Searchbar/Searchbar';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Error } from 'components/Error/Error';
import { getResponse } from '../../services/api';
import { toast } from 'react-toastify';
import { LoadMore } from 'components/Button/Button';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    request: '',
    error: null,
    status: 'idle',
    page: 1,
    gallery: [],
    searchKey: '',
    showLoadMore: true,
    showLoader: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      this.setState({ gallery: [] });
    }

    if (
      prevState.page !== this.state.page ||
      prevState.request !== this.state.request
    ) {
      this.setState({ showLoader: true, error: null });
      try {
        const response = await getResponse(this.state.request, this.state.page);

        this.setState({
          gallery: [...this.state.gallery, ...response],
        });

        if (response.length === 0) {
          throw new Error('error');
        }
        if (response.length < 12) {
          this.setState({ showLoadMore: false });
        } else {
          this.setState({ showLoadMore: true });
        }
      } catch (error) {
        toast.error('No images found for your request');
        this.setState({ error: error, showLoader: false });
      } finally {
        this.setState({ status: 'resolved', showLoader: false });
      }
    }
  }

  handleSubmit = request => {
    if (request !== this.state.request) {
      this.setState({ request: request, page: 1 });
    }
  };

  onHandleLoadMore = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, status, gallery, showLoadMore, showLoader } = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        {status === 'resolved' && gallery.length !== 0 ? (
          <>
            <ul className="ImageGallery">
              <GalleryItem
                gallery={this.state.gallery}
                toggleModal={this.props.toggleModal}
              />
            </ul>
            {showLoadMore && (
              <LoadMore onHandleLoadMore={this.onHandleLoadMore} />
            )}
          </>
        ) : null}
        {showLoader && <Loader />}
        {error && <Error />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  toggleModal: PropTypes.func,
};

export { ImageGallery };
