import Component from './Component';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    const links = this.props.links.map(link => {
      return `<a href="/${link}">${link}</a>`;
    });

    return `
      <header class="${styles.header}">
        <nav>
          ${links.join(' ')}
        </nav>
      </header>`;
  }
}
