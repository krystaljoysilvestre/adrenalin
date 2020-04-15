import * as data from '../dummyData/data.json';

export const fetchArticles = () => dispatch => {
  dispatch({
    type: 'FETCH_ARTICLES',
    payload: data.default
  });
};

export const selectArticle = selectedArticle => dispatch => {
  dispatch({
    type: 'SELECT_ARTICLE',
    payload: [selectedArticle]
  });
};
