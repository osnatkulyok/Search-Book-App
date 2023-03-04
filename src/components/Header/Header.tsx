import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

export function Header(): JSX.Element {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                    <p className='header-text fs-18 fw-3'>A room without books is like a body without a soul 📚🧾</p>
                    <SearchForm />
                </div>
            </header>

        </div>
    )
}

