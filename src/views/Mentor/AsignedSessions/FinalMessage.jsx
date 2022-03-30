import './asignedsessions.css'

function FinalMessage () {
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
        alt='Foto'
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
        <label>Sesión finalizada</label>
        <label>Su encuentro fue el día </label>
        <p>13-Noviembre /2021</p>
        <label>Hora</label>
        <p>17:31</p>
        <input className='button' value='Ver formulario'></input>
      </div>
    </div>
  )
}

export default FinalMessage
