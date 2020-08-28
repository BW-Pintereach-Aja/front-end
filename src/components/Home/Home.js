import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchArticles } from '../../redux/actions/articlesActions'

const Home = (props) => {
	useEffect(() => {
		props.fetchArticles()
	}, [])

	return (
		<div>
			<h1>HOME</h1>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		message: state.message
	}
}

export default connect(mapStateToProps, { fetchArticles })(Home)
