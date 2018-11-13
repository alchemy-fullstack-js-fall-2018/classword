import React, { Component, Fragment } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

import styles from './Demo.css';

export default class Demo extends Component {
  state = {
    font: 'Standard',
    text: '',
    formatedText: '',
    img: ''
  };

  onChange = ({ target }) => {
    // setState in async. It waits for all components to update
    this.setState({ [target.name]: target.value, img: '' }, () => {
      const { text, font } = this.state;
      figlet.text(text, { font }, (err, formatedText) => {
        this.setState({ formatedText });
      });
    });
  };

  textToImage = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('image'))
      .then(img => {
        this.setState({ img });
      });
  };

  saveImage = () => {
    fileSaver.saveAs(this.state.img);
  };

  render() {
    const { font, text, formatedText, img } = this.state;
    const options = ['Standard', 'Banner', 'Alligator2', 'Alpha'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <Fragment>
        <form onSubmit={this.textToImage}>
          <select name="font" defaultValue={font} onChange={this.onChange}>
            {options}
          </select>
          <input name="text" placeholder="put text here" value={text} onChange={this.onChange} />
          <button type="submit">Create Image</button>
        </form>
        <div className={styles.image}>
          <span id="image" >
            {formatedText}
          </span>
        </div>
        {img && <img src={img} />}
        {img && <button onClick={this.saveImage}>Save Image</button>}
      </Fragment>
    );
  }
}
