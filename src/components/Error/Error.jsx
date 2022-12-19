
import { TfiFaceSad } from 'react-icons/tfi';
import LoaderStyles from '../Loader/Loader.module.css';

const Error = () => {
    return (
      <h2 className={LoaderStyles.loader}>
        No images found for your request <TfiFaceSad />
      </h2>
    );
  }


export { Error };
