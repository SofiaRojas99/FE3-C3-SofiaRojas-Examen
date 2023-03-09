import React from 'react'
import './Card-style.css'


const Card = ({nombre, apellido, pelicula, anio, puntaje}) => {
  return (
    <div className='card'>
      <h2>Hola {nombre} {apellido}!</h2>
      <p>Sabemos que tu película favorita es {pelicula}.</p> 
      <p>La misma se estrenó en {anio} y el puntaje que le das es: {puntaje}</p>
    </div>
  )
}

export default Card