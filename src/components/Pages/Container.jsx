import React from 'react'


const Container =({ children, className }) => {
    return (
        <div className={`px-5 w-full max-w-7xl mx-auto ${className ? className : ""}`}>{children}</div>
    )
}

export default Container