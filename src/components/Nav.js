import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faList } from "@fortawesome/free-solid-svg-icons"

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav>
            <h1>TuneIn</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                <FontAwesomeIcon icon={faList} /> List
            </button> 
        </nav>
    )
}

export default Nav
