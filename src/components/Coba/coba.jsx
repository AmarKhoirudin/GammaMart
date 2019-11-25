import React from 'react'
/* import PropTypes from "prop-types" */
import logo from '../../assets/img/logo.svg'

const Coba = ({ gambar, tes }) => {
  return (
    <div>
      <h1>Berhasil Nyoba</h1>
      <img src={gambar} alt='' />
      {tes.map(res => {
        return (
          <div key={res.id}>
            <h1>{res.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

Coba.defaultPropTypes = {
  gambar: logo
}
export default Coba
