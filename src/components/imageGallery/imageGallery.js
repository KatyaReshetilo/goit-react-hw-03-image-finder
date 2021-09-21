import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';
import s from './imageGallery.module.css';
import pixabayFetch from '../../services/pixabayFetch';

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.imageName;
    const nextPage = this.props.page;
    const key = '22673335-b99cca5659da707c56ab45ca0';
    const url = 'https://pixabay.com/api/';
    if (prevProps.imageName !== nextName) {
      this.setState({ images: [] });
    }
    if (prevProps.imageName !== nextName || prevProps.page !== nextPage) {
      pixabayFetch(url, nextName, nextPage, key).then(image =>
        this.setState({
          images: [...this.state.images, ...image.hits],
        }),
      );

      this.props.statusOff(this.state.status);
    }
  }

  render() {
    const imgs = this.state.images;
    return (
      <ul className={s.imageGallery}>
        {imgs.map(img => (
          <ImageGalleryItem
            key={img.webformatURL}
            url={img.webformatURL}
            openModal={() => this.props.onSelect(img.largeImageURL)}
            bigImgUrl={img.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  imageName: PropTypes.string,
  page: PropTypes.number,
  onSelect: PropTypes.func,
  statusOff: PropTypes.func,
};