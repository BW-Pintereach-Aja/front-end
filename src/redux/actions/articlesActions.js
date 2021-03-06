import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAIL = "FETCH_ARTICLES_FAIL";

export const ADD_ARTICLE_START = "ADD_ARTICLE_START";
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_FAIL = "ADD_ARTICLE_FAIL";

export const ARTICLE_START = "ARTICLE_START";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS";
export const ARTICLE_FAIL = "ARTICLE_FAIL";

export const ARTICLE_UPDATE_START = "ARTICLE_UPDATE_START";
export const ARTICLE_UPDATE_SUCCESS = "ARTICLE_UPDATE_SUCCESS";
export const ARTICLE_UPDATE_FAIL = "ARTICLE_UPDATE_FAIL";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const fetchArticles = () => (dispatch) => {
  dispatch({ type: FETCH_ARTICLES_START });
  axiosWithAuth()
    .get("/api/articles")
    .then((res) => {
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: FETCH_ARTICLES_FAIL, payload: err.message })
    );
};

export const deleteArticle = (id) => (dispatch) => {
  // dispatch({ type: DELETE_ARTICLE });
  if (window.confirm("Delete this article?")) {
    axiosWithAuth()
      .delete(`/api/articles/${id}/remove-article`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  }
};

export const addNewArticle = (userId, newArticle) => (dispatch) => {
  console.log("NEW ARTICLE ", newArticle);
  dispatch({ type: ADD_ARTICLE_START });
  axiosWithAuth()
    .post(`/api/articles/${userId}/user`, newArticle)
    .then((res) => {
      console.log("new article sent: ", res.data);
      dispatch({ type: ADD_ARTICLE_SUCCESS, payload: res.data });
      // history.push("/articles/");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_ARTICLE_FAIL, payload: err.message });
    });
};

export const fetchSingleArticle = (id) => (dispatch) => {
  dispatch({ type: ARTICLE_START });
  axiosWithAuth()
    .get(`/api/articles/${id}`)
    .then((res) => {
      dispatch({ type: ARTICLE_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: ARTICLE_FAIL, payload: err.message }));
};

export const updateSingleArticle = (id, article) => (dispatch) => {
  console.log("update action", id, article);

  dispatch({ type: ARTICLE_UPDATE_START });
  axiosWithAuth()
    .put(`/api/articles/${id}`, article)
    .then((res) => {
      axiosWithAuth()
        .get(`/api/articles`)
        .then((response) => {
          dispatch({ type: ARTICLE_UPDATE_SUCCESS, payload: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) =>
      dispatch({ type: ARTICLE_UPDATE_FAIL, payload: err.message })
    );
};

export const fetchCategories = () => (dispatch) => {
  axiosWithAuth()
    .get("/api/articles/categories")
    .then((res) => {
      console.log(res.data);

      dispatch({ type: FETCH_CATEGORIES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
