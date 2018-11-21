import { connect } from 'react-redux';
import Clothes from '../../components/clothes/Clothes';
import { getClothes, getTotalClothes } from '../../selectors/clothes';

const mapStateToProps = state => ({
  clothes: getClothes(state),
  totalClothes: getTotalClothes(state)
});

export default connect(
  mapStateToProps
)(Clothes);
