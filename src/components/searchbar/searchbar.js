import { Component } from 'react';
import s from './searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handelNameChange = event => {
    this.setState({
      imageName: event.currentTarget.value.toLowerCase(),
    });
  };

  handelSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handelSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.imageName}
            onChange={this.handelNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
