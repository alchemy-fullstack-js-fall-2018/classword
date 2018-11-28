import { connect } from 'react-redux';
import Artists from '../../components/artists/Artists';
import { updateSearchTerm, fetchArtists } from '../../actions/artists';
import { getArtists, getSearchTerm } from '../../selectors/artists';

const mapStateToProps = state => ({
  artists: getArtists(state),
  searchTerm: getSearchTerm(state),
});

const mapDispatchtoProps = dispatch => ({
  updateSearchTerm({ target }) {
    dispatch(updateSearchTerm(target.value));
  },

  artistSearch(searchTerm) {
    dispatch(fetchArtists(searchTerm));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Artists);
