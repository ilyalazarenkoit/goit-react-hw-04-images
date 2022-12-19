import { useState, useEffect } from 'react';
import '../styles.css';
import { Searchbar } from '../Searchbar/Searchbar';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Error } from 'components/Error/Error';
import { getResponse } from '../../services/api';
import { toast } from 'react-toastify';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const ImageGallery = ({ toggleModal }) => {
  const [request, setRequest] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = req => {
    if (req !== request) {
      setGallery([]);
      setRequest(req);
      setPage(1);
    }
  };
  const onHandleLoadMore = e => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!request) {
      return;
    }
    setShowLoader(true);
    setError(null);
    async function fetching() {
      try {
        const response = await getResponse(request, page);
        setGallery(prevGallery => [...prevGallery, ...response]);

        if (response.length === 0) {
          throw new Error('error');
        }
        if (response.length < 12) {
          setShowLoadMore(false);
        } else {
          setShowLoadMore(true);
        }
      } catch (error) {
        toast.error('No images found for your request');
        setError(error);
        setShowLoader(false);
      } finally {
        setStatus('resolved');
        setShowLoader(false);
      }
    }
    fetching();
  }, [request, page]);

  return (
    <>
      <Searchbar handleSubmit={handleSubmit} />
      {status === 'resolved' && gallery.length !== 0 ? (
        <>
          <ul className="ImageGallery">
            <GalleryItem gallery={gallery} toggleModal={toggleModal} />
          </ul>
          {showLoadMore && <Button onHandleLoadMore={onHandleLoadMore} />}
        </>
      ) : null}
      {showLoader && <Loader />}
      {error && <Error />}
    </>
  );
};

ImageGallery.propTypes = {
  toggleModal: PropTypes.func,
};
