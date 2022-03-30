import React, { useEffect } from 'react';
import studentStyle from './thanksStudent.module.css';
/* import { useSelector } from 'react-redux' */
import logo from '../../../assets/Logo/programateAcademyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
/* import axios from 'axios'
import { useNavigate } from 'react-router-dom' */

/* const baseUrl = 'http://localhost:3001/' */

const Thanks = () => {

  const check = <FontAwesomeIcon icon={faCheckCircle} className={studentStyle.checkIcon} /> /* IconFormFA */
  /* const idStudent = useSelector(state => state.auth.user.id)
  const navigate = useNavigate() 
  
  useEffect(() => {
    if(idStudent){
      axios.get(`${baseUrl}/api/one/student/${idStudent}`)
      .then(res => {
        const assignedMentor = res.data[0].assignedMentor;
        // console.log(assignedMentor)
        if(assignedMentor.toString() !== "Not assigned"){
          // console.log("entra al if")
          navigate('/student-sessions')
        }
        
      })
    }
  }, [idStudent, navigate]) */


  return (
    <section className={studentStyle.containerAll}>
      <div className={studentStyle.logoContainer}>
        <img src={logo} alt="Programate Academy" className={studentStyle.logoImg} />
      </div>
      <article className={studentStyle.thanksContainer}>
        <div className={studentStyle.checkContainer}>
          {check}
          <h3>¡Hemos recibido tus respuestas!</h3>
        </div>
        <div className={studentStyle.notifContainer}>
          <p>Te notificaremos por correo cuándo se haya realizado la asignación de tu mentor.</p>
          <button className={studentStyle.btnFinalizar}>Finalizar</button>
        </div>
      </article>

      {/* <h1 className="little">.hola.</h1> */}
    </section>
  )
}

export default Thanks
