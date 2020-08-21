import React, {useEffect, useState} from "react";
import { connect } from 'react-redux'
import {addArticle, greet} from '../../redux/actions/articlesActions'

const Articles = (props) => {
  useEffect(() => {
    props.addArticle()
    props.greet()
  }, [])
  return (
    <div>
      {/* {props.articles.map(article => {
        return <p>{article.articleTitle}</p>
      })} */}
      {console.log("GREET", props.articles)}
      <button onClick = {()=> props.addArticle()}>CLICK</button>
    </div>
    )
}

const mapStateToProps = state => {
  return {
    message: state.message,
    articles: state.articles
  }
}

export default connect(mapStateToProps, {addArticle, greet})(Articles)