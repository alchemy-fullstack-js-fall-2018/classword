import { connect } from 'react-redux';
import { getRandomFact } from '../../selectors/ron';
import { getRandomImage } from '../../selectors/image';
import Facts from '../../components/facts/Facts'
import { fetchRandomFact } from '../../actions/ron';
import { setRandomImage } from '../../actions/image';

const mapStateToProps = state => ({
  facts: [getRandomFact(state)],
  imageSrc: getRandomImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetchFacts: (count) => {
    dispatch(fetchRandomFact(count));
    dispatch(setRandomImage());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Facts)
