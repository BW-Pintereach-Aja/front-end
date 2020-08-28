import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'

import './AddCategory.scss'
// import { createTempVariable } from 'typescript'

const initialForm = {
	name: '',
	desc: ''
}

const AddCategory = () => {
	const history = useHistory()

	const [ post, setPost ] = useState()

	const [ createCategory, setCreateCategory ] = useState(initialForm)

	const [ buttonDisabled, setButtonDisabled ] = useState(true)

	const [ serverErrors, setServerErrors ] = useState('')

	const [ errors, setErrors ] = useState(initialForm)

	const [ form, setForm ] = useState({})

	const handleChange = (e) => {
		setCreateCategory({
			...createCategory,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios
			.post('https://bw-pintereach-aja.herokuapp.com/api/articles/new-category', createCategory)
			.then((res) => {
				console.log(res.data)
				localStorage.setItem('token', res.data.token)
				setPost(res.data)
				// history.push("/articles/");
				// window.location.reload(true)
				setServerErrors(null)
				setCreateCategory(initialForm)
			})
			.catch((err) => {
				setServerErrors('Could not create category')
			})
	}

	const inputChange = (e) => {
		e.persist()
		console.log('input changed!', e.target.value)
		const newFormData = {
			...createCategory,
			[e.target.name]: e.target.value
		}

		validateChange(e)
		setCreateCategory(newFormData)
	}

	const formSchema = yup.object().shape({
		name: yup.string().required('Category name is required'),
		desc: yup.string()
	})

	useEffect(
		() => {
			formSchema.isValid(createCategory).then((isValid) => {
				setButtonDisabled(!isValid)
			})
		},
		[ createCategory ]
	)

	const validateChange = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.name)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: ''
				})
			})
			.catch((err) => {
				console.log(err)

				setErrors({
					...errors,
					[e.target.name]: err.errors[0]
				})
			})
	}

	return (
		<form className="category-container" onSubmit={handleSubmit}>
			<h1>Create a Category</h1>
			<p>Organize your articles into cateogries.</p>
			<label htmlFor="name">Category name:</label>
			<input className="category-input" id="name" type="text" name="name" value={createCategory.name} onChange={inputChange} />
			<label htmlFor="desc">Description:</label>
			<input className="category-input" id="desc" type="text" name="desc" value={createCategory.desc} onChange={inputChange} />

			<button className="create-btn" disabled={buttonDisabled} type="submit">
				Create Category
			</button>
			{/* <pre>{JSON.stringify(post, null, 2)}</pre>        */}
		</form>
	)
}

export default AddCategory
