import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {

  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    pelicula: '',
    anioDeEstreno: '',
    puntaje: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      if(user.nombre.length > 2 && !/^\s/.test(user.nombre) && user.apellido.length > 5){
        setShow(true)
        setErr(false)
    } else {
        setShow(false)
        setErr(true)
    }
  }

  return (
    <div className="App">
      <h1>Elige tu película favorita</h1>
      <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input required type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Apellido</label>
            <input required type="text" value={user.apellido} onChange={(e) => setUser({...user, apellido: e.target.value})}/>
            <label>Película favorita</label>
            <input required type="text" value={user.pelicula} onChange={(e) => setUser({...user, pelicula: e.target.value})}/>
            <label>Año de estreno</label>
            <input type="number" min='0' max='2023' value={user.anioDeEstreno} onChange={(e) => setUser({...user, anioDeEstreno: parseInt(e.target.value)})}/>

            <label>Puntaje</label>
            <select required value={user.puntaje} onChange={(e) => setUser({...user, puntaje: e.target.value})}>
                <option value="" select disabled>Selecciona un puntaje</option>
                <option value="1 estrella">1 estrella</option>
                <option value="2 estrellas">2 estrellas</option>
                <option value="3 estrellas">3 estrellas</option>
                <option value="4 estrellas">4 estrellas</option>
                <option value="5 estrellas">5 estrellas</option>
            </select>
            <button type='submit'>Enviar</button>
        </form>
        {err && <p className='error'>Por favor chequea que la información sea correcta.</p>}
        {show &&  <Card  nombre={user.nombre} apellido={user.apellido} pelicula={user.pelicula} anio={user.anioDeEstreno} puntaje={user.puntaje}/>}
        
    </div>
  )
}

export default App