import { connect } from 'react-redux';
import Artists from '../../components/artists/Artists';
import { updateSearchTerm, fetchArtistsPromise } from '../../actions/artists';
import { getArtists, getSearchTerm, isLoading } from '../../selectors/artists';
import Loading from '../../components/loading/Loading';
import { loadingWithParagraph } from '../../components/loading/loadingFallback';

const mapStateToProps = state => ({
  artists: getArtists(state),
  searchTerm: getSearchTerm(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm({ target }) {
    dispatch(updateSearchTerm(target.value));
  },

  artistSearch(searchTerm) {
    dispatch(fetchArtistsPromise(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Artists));
