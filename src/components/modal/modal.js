import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleClickBackdrope = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.handleClickBackdrope}>
        <div className={s.modal}>
          <img src={this.props.bigImg} alt="" width="800" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func,
  bigImg: PropTypes.string,
};
