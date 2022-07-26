import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import classes from '../style/Books.module.css'

const url = 'http://localhost:8000/books/'

function Books() {
	const [data, setData] = useState([])
	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setData(() => res.data)
			})
			.catch((err) => console.err(err))
	}, [setData])
	return (
		<div className={classes.home}>
			<h1>Reading List</h1>

			{data.map((book) => (
				<BookCard book={book} />
			))}
		</div>
	)
}

export default Books
