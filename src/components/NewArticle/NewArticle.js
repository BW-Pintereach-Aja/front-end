import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addNewArticle, fetchCategories } from '../../redux/actions/articlesActions'

const NewArticle = (props) => {
	const history = useHistory()

	const [ newArticle, setNewArticle ] = useState({
		url: '',
		title: '',
		desc: '',
		categoryID: ''
	})

	const userID = window.localStorage.getItem('userID')

	const handleChange = (e) => {
		setNewArticle({
			...newArticle,
			[e.target.name]: e.target.value
		})
	}
	console.log('NEW ARTICLES CATEGORIES ', props.categories)
	useEffect(() => {
		props.fetchCategories()
	}, [])

	return (
		<div className="new-article">
			<h2>Add New Article</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					console.log('SUBMIT', newArticle)
					props.addNewArticle(userID, newArticle)
					history.push('/articles/')
					// window.location.reload();
				}}
			>
				<input
					type="text"
					name="title"
					value={newArticle.title}
					onChange={handleChange}
					placeholder="Title..."
				/>
				<input
					type="text"
					name="desc"
					value={newArticle.desc}
					onChange={handleChange}
					placeholder="Description..."
				/>
				<input type="text" name="url" value={newArticle.url} onChange={handleChange} placeholder="URL..." />
				<select name="categoryID" value={newArticle.categoryID}>
					<option disabled selected value>
						-- Select a Category --
					</option>
					{props.categories.map((category) => {
						return <option value={category.id}>{category.name}</option>
					})}
				</select>
				<button>Add Article</button>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		categories: state.articlesReducer.categories || []
	}
}

export default connect(mapStateToProps, { addNewArticle, fetchCategories })(NewArticle)
