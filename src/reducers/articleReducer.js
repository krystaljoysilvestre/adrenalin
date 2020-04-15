import initialState from './initialState';

export default (state = initialState.articles, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return Object.assign([], state, action.payload, { selectedArticle: [] });

    case 'SELECT_ARTICLE':
      return Object.assign(state, { selectedArticle: action.payload });

    default:
      return state;
  }
};
