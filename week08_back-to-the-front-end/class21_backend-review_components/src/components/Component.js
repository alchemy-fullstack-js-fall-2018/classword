export default class Component {
  constructor(props) {
    this.props = props || {};
  }
  
  attach(node) {
    node.innerHTML = this.render();
  }

  render() {
    throw Error('Component should render html');
  }
}
