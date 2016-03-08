function city(state = '', action) {
  if (action.type === 'SEARCH_CITY') {
    return '' + action.city;
  }
  return state;
}

export default {
  city: city
};
