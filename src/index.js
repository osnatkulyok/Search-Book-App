import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import About from './pages/About/About.tsx'
import BookDetails from './components/BookDetails/BookDetails.tsx'
import BookList from './components/BookList/BookList.tsx'
import LogIn from './components/LogIn/LogIn.tsx'
import './style/index.css'
import { AppProvider } from './context'

// Create a root for the React application using ReactDOM.createRoot.
const root = ReactDOM.createRoot(document.getElementById('root'))

// Define the routes for the application using BrowserRouter, Routes, and Route components.
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>,
)
