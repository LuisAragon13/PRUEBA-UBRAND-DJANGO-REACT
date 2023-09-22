import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage'
import { BooksFormPage } from './pages/BooksFormPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigate to='/books'/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/books-create' element={<BooksFormPage/>}/>
        <Route path='/books/:id' element={<BooksFormPage/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
