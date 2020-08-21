import axiosWithAuth from '../../utils/axiosWithAuth'
export const ADD_ARTICLES = "ADD_ARTICLES";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";

export const addArticle = () => dispatch => {
  axiosWithAuth().get('/api/articles')
    .then(res => {
      console.log(res.data)
      dispatch({type: ADD_ARTICLES, payload: res.data})
    })
    .catch(err => {
    console.log(err);
  })
};

export const removeArticle = (item) => {
  return {
    type: REMOVE_ARTICLE,
    payload: item,
  };
};
