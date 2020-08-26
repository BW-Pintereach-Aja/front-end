import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Articles from './components/Articles/Articles'
import Profile from './components/Profile/Profile'
import NewArticle from './components/NewArticle/NewArticle'
import ArticleEditor from './components/ArticleEditor/ArticleEditor'

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/">
				<Home />
			</Route>
			<Switch>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<PrivateRoute exact path="/profile" component={Profile} />
				<PrivateRoute exact path="/add-new-article" component={NewArticle} />
				<PrivateRoute exact path="/articles" component={Articles} />
				<PrivateRoute exact path="/article-editor" component={ArticleEditor} />
			</Switch>
		</div>
	)
}
