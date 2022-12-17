import { Component } from 'react';
import searchBarStyles from '../Searchbar/Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    request: '',
  };

  onHandleChange = e => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };
  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.request.trim() === '') {
      toast.error('Please enter your search query');
      return;
    }
    this.props.handleSubmit(this.state.request);
    this.setState({ request: '' });
  };
  render() {
    return (
      <>
        <form
          onSubmit={this.onHandleSubmit}
          className={searchBarStyles.SearchForm}
        >
          <input
            type="text"
            className={searchBarStyles.SearchForm_input}
            value={this.state.request}
            onChange={this.onHandleChange}
            placeholder="Search images and photos"
          />
          <button className={searchBarStyles.button}>
            <FaSearch />
          </button>
        </form>
      </>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
};
export { Searchbar };
