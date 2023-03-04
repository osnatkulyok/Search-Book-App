import React from 'react'
import loader from '../../images/loader.jpg'
import './Loader.css'

function Loader(): JSX.Element {
    return (
        <div className="loader flex flex-c">
            <img src={loader} alt="loader" />
        </div>
    )
}

export default Loader