import React from 'react'
import './404.scss'
import Header from '../header/Header'

const error404 = () => {
  return (
    <>
      <Header headerClass=' headerBrand' />
      <div className='error404'>
        <strong>ERROR 404 NOT FOUND!!</strong>
        <br />
        <span>page you've been looking for can't be found.</span>
      </div>
    </>
  )
}
export default error404
