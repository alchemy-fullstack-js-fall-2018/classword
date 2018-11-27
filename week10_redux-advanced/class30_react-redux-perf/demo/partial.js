function add(a, b) {
  return a + b;
}

console.log(addNumber());

const add2 = add.bind(null, 2);
const add2And3 = add.bind(null, 2, 3);

console.log(add2(5));
console.log(add2And3()); // print 5


// class MyCompontent extends Component {
//   constructor() {
//     this.handleChange = this.handleChange.bind(this);
//   }
// }


// export default class CarDetail extends Component {
//  static propTypes = {
//    car: PropTypes.object,
//    carArrived: PropTypes.func,
//    carDeparted: PropTypes.func
//  };

//  handleCarArrival = ({ target }) => {
//    this.props.carArrived(this.props.car);
//  };

//  render() {
//    const { car, carDeparted } = this.props;

//    return (
//      <Fragment>
//        <h2>Car Detail Page</h2>
//        <h3>
//          {car.make} {car.model}
//        </h3>
//        <p>Plate: {car.id}</p>
//        <p>State: {car.state}</p>
//        <p>Color: {car.color}</p>
//        <button onClick={carArrived.bind(null, this.props.car)}>
//          Arrived
//        </button>
//        <button value={car.id} onClick={carDeparted}>
//          Departed
//        </button>
//      </Fragment>
//    );
//  }
// }
