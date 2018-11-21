import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Clothes from '../../components/clothes/Clothes';
import { updateClothesSearchTerm } from '../../actions/clothes';
import { getFilteredClothes, getClothesSearchTerm } from '../../selectors/clothes';

class FilteredClothes extends PureComponent {
  static propTypes = {
    clothes: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    updateSearchTerm: PropTypes.func.isRequired
  };

  render() {
    const { clothes, searchTerm, updateSearchTerm } = this.props;
    return (
      <Fragment>
        <form>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
        </form>
        <Clothes clothes={clothes} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  clothes: getFilteredClothes(state),
  searchTerm: getClothesSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateClothesSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredClothes);
