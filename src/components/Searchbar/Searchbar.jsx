import { useState } from 'react';
import searchBarStyles from '../Searchbar/Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const Searchbar = ({ handleSubmit }) => {
  const [request, setRequest] = useState('');

  const onHandleChange = e => {
    setRequest(e.target.value.toLowerCase());
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (request.trim() === '') {
      toast.error('Please enter your search query');
      return;
    }
    handleSubmit(request);
    setRequest('');
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={searchBarStyles.SearchForm}>
        <input
          type="text"
          className={searchBarStyles.SearchForm_input}
          value={request}
          onChange={onHandleChange}
          placeholder="Search images and photos"
        />
        <button className={searchBarStyles.button}>
          <FaSearch />
        </button>
      </form>
    </>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
};
