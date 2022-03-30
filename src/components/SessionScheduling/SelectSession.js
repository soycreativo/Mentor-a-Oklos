import React, { Component } from 'react'
import './SelectSession.css'
import 'react-datepicker/dist/react-datepicker.css'

class SelectSession extends Component {
  /* THIS PART IS FOR SAVE THE DATES
  state = {
    fecha: new Date('2021', '11', '03'),
   
  }
  onChange = fecha => {
    this.setState({ fecha: fecha })
  }
  seleccione = fecha => {
    alert(fecha)
  }
*/
  render () {
    return (
      <div className='calendario'>
        <h3>Querido estudiante</h3>
        <p>
          Debes escoger el dìa de tu sesión de mentoria dentro del siguiente
          rango de fechas que tu mentor ha programado.
        </p>
        <h3>Rango de fechas para tu sesión</h3>
        <div className='fechas-disponibles'>
          <div className='fecha-inicial'>
            <h4>Fecha inicial</h4>
            <p>10-Noviembre /2021</p>
          </div>

          <div className='fecha-final'>
            <h4>Fecha final</h4>
            <p>21-Noviembre /2021</p>
          </div>

          <div className='hora-de-inicio'>
            <h4>Hora de inicio</h4>
            <p>17:30</p>
          </div>
          <div className='hora-de-finalizacion'>
            <h4>Hora de finalizacion</h4>
            <p>18:30</p>
          </div>
        </div>
        <div>
          <select className='select-date' value='seleccione una fecha'>
            <option>2021/11/11</option>
            <option>2021/11/13</option>
            <option>2021/11/17</option>
          </select>

          <datalist />
          <input
            className='btn-selct-date'
            type='button'
            value='seleccione fecha'
          />
        </div>
      </div>
    )
  }
}

export default SelectSession
