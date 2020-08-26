import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Home = (props) => {
	const { something } = props
	console.log('SOMETHING', something)
	console.log('PROPS', props)

	return (
		<div>
			<h1>HOME</h1>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		something: state.articlesReducer.message
	}
}

export default connect(mapStateToProps, {})(Home)
