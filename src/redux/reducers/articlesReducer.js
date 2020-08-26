import {
	FETCH_ARTICLES_START,
	FETCH_ARTICLES_SUCCESS,
	FETCH_ARTICLES_FAIL,
	FETCH_CATEGORIES,
	ARTICLE_START,
	ARTICLE_SUCCESS,
	ARTICLE_FAIL,
	ADD_ARTICLE_START,
	ADD_ARTICLE_SUCCESS,
	ADD_ARTICLE_FAIL,
	ARTICLE_UPDATE_START,
	ARTICLE_UPDATE_SUCCESS,
	ARTICLE_UPDATE_FAIL
} from '../actions/articlesActions'

const initialState = {
	data: [],
	isFetching: false,
	error: '',
	categories: []
}

export const articlesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ARTICLES_START:
			console.log('REDUCER --> ', action.payload)
			return {
				...state,
				isFetching: true,
				error: ''
			}
		case FETCH_ARTICLES_SUCCESS:
			return {
				...state,
				data: action.payload,
				isFetching: false,
				error: ''
			}
		case FETCH_ARTICLES_FAIL:
			return {
				...state,
				error: action.payload
			}
		case FETCH_CATEGORIES:
			console.log('FETCH CATEGORIES', action.payload)
			return {
				...state,
				categories: action.payload
			}
		case ARTICLE_START:
			return {
				...state,
				isFetching: true,
				error: false
			}
		case ARTICLE_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: ''
			}
		case ARTICLE_FAIL:
			return {
				...state,
				error: action.payload
			}
		case ADD_ARTICLE_START:
			return {
				...state,
				isFetching: true,
				error: false
			}
		case ADD_ARTICLE_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: ''
			}
		case ADD_ARTICLE_FAIL:
			return {
				...state,
				error: action.payload
			}
		default:
			return state
	}
}
