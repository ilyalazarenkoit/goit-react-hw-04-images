import { Component } from 'react';
import { TfiFaceSad } from 'react-icons/tfi';
import LoaderStyles from '../Loader/Loader.module.css';

class Error extends Component {
  render() {
    return (
      <h2 className={LoaderStyles.loader}>
        No images found for your request <TfiFaceSad />
      </h2>
    );
  }
}

export { Error };
