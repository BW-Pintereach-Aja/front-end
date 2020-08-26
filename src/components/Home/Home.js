<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions/articlesActions";

const Home = (props) => {
  useEffect(() => {
    props.fetchArticles();
  }, []);

  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps, { fetchArticles })(Home);
>>>>>>> 3075c29a20d633ff2011db1dcdf27a7661bba241
