import FilteredClothes from './containers/clothes/FilteredClothes';

export default {
  CLOTHES: {
    path: '/clothes',
    Component: FilteredClothes,
    linkTo: () => '/clothes'
  }
};
