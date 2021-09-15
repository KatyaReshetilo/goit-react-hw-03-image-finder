import PropTypes from 'prop-types';
import s from './button.module.css';
export default function Button({ onClickAdd }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button className={s.button} type="button" onClick={onClickAdd}>
      <span>Load More</span>
    </button>
  );
}

Button.propTypes = {
  onClickAdd: PropTypes.func,
};
