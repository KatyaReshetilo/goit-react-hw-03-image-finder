import { React, Component } from 'react';
import ImageGallery from './components/imageGallery/imageGallery';
import Searchbar from './components/searchbar/searchbar';
import Modal from './components/modal/modal';
import Button from './components/button/button';
import Loader from './components/Loader/loader';
class App extends Component {
  state = {
    imageName: null,
    showModal: false,
    bigImg: null,
    page: 1,
    button: false,
    status: 'idle',
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  handelFormSubmit = imageName => {
    return this.setState({
      imageName,
      button: true,
      status: 'load',
    });
  };

  bigImgs = bigImgURL => {
    this.setState({ bigImg: bigImgURL });
    this.toggleModal();
  };
  statusOff = idle => {
    setTimeout(idle => this.setState({ status: idle }), 500);
  };

  addMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ImageGallery
          imageName={this.state.imageName}
          onOpen={this.toggleModal}
          bigImg={this.state.bigImg}
          page={this.state.page}
          onSelect={this.bigImgs}
          statusOff={this.statusOff}
        />
        {this.state.button && <Button onClickAdd={this.addMore} />}
        {this.state.status === 'load' && <Loader />}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} bigImg={this.state.bigImg} />
        )}
      </>
    );
  }
}
export default App;
