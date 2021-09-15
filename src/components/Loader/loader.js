import LoaderSpinner from 'react-loader-spinner';
import s from './loder.module.css';
const Loader = () => {
  return (
    <div className={s.overlay}>
      <LoaderSpinner type="Grid" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;
