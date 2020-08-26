import axiosWithAuth from '../../utils/axiosWithAuth'
export const ADD_ARTICLES = 'ADD_ARTICLES'
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE'
export const GREET = 'GREET'

export const addArticle = () => (dispatch) => {
	axiosWithAuth()
		.get('/api/articles')
		.then((res) => {
			console.log('Actions --> ', res.data)
			dispatch({ type: ADD_ARTICLES, payload: res.data })
		})
		.catch((err) => {
			console.dir(err)
		})
}

export const greet = () => (dispatch) => {
	dispatch({ type: GREET, payload: 'BYE' })
}

export const removeArticle = (item) => {
	return {
		type: REMOVE_ARTICLE,
		payload: item
	}
}
