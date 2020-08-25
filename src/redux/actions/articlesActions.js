import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAIL = "FETCH_ARTICLES_FAIL";

export const ADD_ARTICLES = "ADD_ARTICLES";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const fetchArticles = () => (dispatch) => {
  dispatch({ type: FETCH_ARTICLES_START });
  axiosWithAuth()
    .get("/api/articles")
    .then((res) => {
      console.log("Actions --> ", res.data);
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_ARTICLES_FAIL, payload: err }));
};

export const deleteArticle = (id) => (dispatch) => {
  dispatch({ type: DELETE_ARTICLE });
  axiosWithAuth()
    .delete(`/api/articles/${id}/remove-article`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err.message));
};

export const removeArticle = (item) => ({
  type: DELETE_ARTICLE,
  payload: item,
});
