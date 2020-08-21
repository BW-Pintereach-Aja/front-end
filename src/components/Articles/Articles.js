import React, {useEffect} from "react";
import { connect } from 'react-redux'
import {addArticle} from '../../redux/actions/articlesActions'

const Articles = (props) => {
  useEffect(() => {
    props.addArticle()
  }, [])
    return(
        <h2>Articles will be here</h2>
    )
}

export default connect(null, {addArticle})(Articles)