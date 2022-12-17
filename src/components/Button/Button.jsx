import { Component } from 'react';
import PropTypes from 'prop-types';
class LoadMore extends Component {
  render() {
    return (
      <button
        className="loadMore"
        type="button"
        onClick={this.props.onHandleLoadMore}
      >
        Load More
      </button>
    );
  }
}

LoadMore.propTypes = {
  onHandleLoadMore: PropTypes.func,
};
export { LoadMore };
