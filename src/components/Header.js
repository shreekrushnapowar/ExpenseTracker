import React from 'react'

const Header = ({name, version}) => {
  return (
    <>
    <div className="alert alert-primary">
        <div className="container">
            <h1>{name}</h1>
            <p className="lead">version {version}</p>
        </div>
    </div>
    
    </>
  )
}

export default Header