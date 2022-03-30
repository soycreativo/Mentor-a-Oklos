import logo from './logo.svg'
import './dashboardsession.css'

function DashboardMentor () {
  const email = 'lalalanda123@gmail.com'
  const NoPhone = '315 123 6345'
  const prevStudies = 'Chamanismo, Alquimia.'
  const age = '23 años'
  const interest = 'IA, Backend, Marketing'

  return (
    <div className='container-card'>
      <img
        className='photo'
        src='https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/01/Visa-de-estudiante-Australia-5-buenas-razones-para-que-la-pidas.jpg'
      ></img>
      <label>Email: </label>
      <p>{email}</p>

      <label>No. de telefono:</label>
      <p>{NoPhone}</p>
      <label>Estudios previos:</label>
      <p>{prevStudies}</p>

      <p>Edad: {age}</p>
      <label>Intereses:</label>
      <p>{interest}</p>
      <div className='session'>
        <p>Sesión 1</p>
        <input type='button' value='Agendar sesión.'></input>
      </div>
    </div>
  )
}

export default DashboardMentor
