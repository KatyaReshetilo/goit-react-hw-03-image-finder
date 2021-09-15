import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './imageGalleryItem.module.css';
export default class ImageGalleryItem extends Component {
  onClickItem = () => {
    this.props.openModal(this.props.bigImageURL);
  };
  render() {
    return (
      <li className={s.imageGalleryItem}>
        <img
          src={this.props.url}
          alt="image"
          className={s.imageGalleryItemImage}
          onClick={this.onClickItem}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  bigImageURL: PropTypes.string,
  url: PropTypes.string,
  openModal: PropTypes.func,
};
