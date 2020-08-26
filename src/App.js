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

export default function App() {
	return (
		<div className="App">
			<Header />
			{/* <Route exact path="/"> */}
			<Home />
			{/* </Route> */}
			<Switch>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<PrivateRoute path="/profile" component={Profile} />
				<PrivateRoute path="/articles" component={Articles} />
			</Switch>
		</div>
	)
}
