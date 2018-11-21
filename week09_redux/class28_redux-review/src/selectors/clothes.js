export const getClothes = state => {
  return Object.keys(state.clothes.list).map(id => ({
    id,
    ...state.clothes.list[id]
  }));

  // return Object.keys(state.clothes.list).map(id => {
  //   return {
  //     id: id,
  //     type: state.clothes.list[id].type,
  //     color: state.clothes.list[id].color
  //   };
  // });
};

export const getTotalClothes = state => {
  return getClothes(state).length;
};

export const getClothesSearchTerm = state => {
  return state.clothes.searchTerm;
};

export const getFilteredClothes = state => {
  const searchTerm = getClothesSearchTerm(state);
  return getClothes(state).filter(c => {
    return c.color.includes(searchTerm) ||
      c.type.includes(searchTerm) ||
      c.id.includes(searchTerm);
  });
};
