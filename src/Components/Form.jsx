import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [show, setShow] = useState(true)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

  return (
    <div> 
        <form onSubmit={handleSubmit}>
            <label></label>
            <input type="text"/>
            <label></label>
            <input type="text"/>
            <label></label>
            <input type="text"/>

            <select>
                <option value=""></option>
                <option value="Opcion1"></option>
                <option value="Opcion2"></option>
                <option value="Opcion3"></option>
            </select>
            <button>Enviar</button>
        </form>
        {err ? 'No ha colocado la información correcta' : null}
        {show &&  <Card nombre='Sofia'/>}
        

    </div>
   
  )
}
export default Form