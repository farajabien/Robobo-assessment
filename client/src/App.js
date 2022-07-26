import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import AddBook from './pages/AddBook'

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path='/' element={<Books />} />
				<Route path='/books' element={<Books />} />
				<Route path='/add' element={<AddBook />} />
				<Route path='/books/:id' element={<BookDetails />} />
			</Routes>
		</Router>
	)
}

export default App
