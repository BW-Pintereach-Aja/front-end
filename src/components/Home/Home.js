import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {addArticle, greet} from '../../redux/actions/articlesActions'

const Home = (props) => {
 useEffect(() => {
    props.addArticle()
    props.greet()
 }, [])
 console.log("HOME", props.message)
  
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, {addArticle, greet})(Home)