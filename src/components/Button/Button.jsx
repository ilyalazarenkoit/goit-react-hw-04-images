import PropTypes from 'prop-types';
export const Button = ({ onHandleLoadMore }) => {
  return (
    <button className="loadMore" type="button" onClick={onHandleLoadMore}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onHandleLoadMore: PropTypes.func,
};
