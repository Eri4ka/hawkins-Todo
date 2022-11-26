export const activeFilterReducer = (state, action) => {
  switch (action.type) {
    case 'Today':
      return { active: (state.active = 'Today') };
    case 'Favorite':
      return { active: (state.active = 'Favorite') };
    default:
      return { active: (state.active = 'All') };
  }
};
