import { Component } from 'react';
import LoaderStyles from '../Loader/Loader.module.css';
import { MutatingDots } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className={LoaderStyles.loader}>
        <h2>
          Loading...
          <MutatingDots
            height="100"
            width="100"
            color="rgb(93, 93, 237)"
            secondaryColor="rgb(93, 93, 237)"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </h2>
      </div>
    );
  }
}

export { Loader };
