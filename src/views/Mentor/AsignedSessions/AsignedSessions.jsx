
import './asignedsessions.css'

function AsignedSessions () {

  


  const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'
  const email = 'lalalanda123@gmail.com'
  const NoPhone = '315 123 6345'
  const prevStudies = 'Chamanismo, Alquimia.'
  const age = '23 años'
  const interest = 'IA, Backend, Marketing'
  

  return (
    <div className="studentsCardContainer">
    <div className='container-card-assignedSessions'>
      <img
        className='photo'
        src='https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/01/Visa-de-estudiante-Australia-5-buenas-razones-para-que-la-pidas.jpg'
        alt="Foto"       
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
        <label>Sesión 1 agendada</label>
        <label>El encuentro con tu mentor será sel día </label>
        <p>13-Noviembre /2021</p>
        <label>Hora de inicio</label>
        <p>17:31</p>
        <label>Link de sesión</label>
        <p>https://us02web.zoom.us/j/89970425043?</p>
        
        <button className='button' value='Ver formulario'></button>
        <label>!Recuerda ingresar al formulario y enviar tus comentarios despues de la sesión!
        </label>
      </div>
    </div>
    </div>
  )
}

export default AsignedSessions
