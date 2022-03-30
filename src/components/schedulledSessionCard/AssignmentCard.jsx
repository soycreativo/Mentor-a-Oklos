import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../schedulledSessionCard/assignmentCard.module.css'



const schedulledSessionCard = ({numSession, dateAsig, id, link }) => {
    return (
            <>
                <div className={styles.whitebox}>
                <h3 className={styles.title}>
                {`Sesión ${numSession}`} 
                </h3>
                <h4 className={styles.subtitles} >
                    El encuentro con tu mentor será el día
                </h4>
                <p className={styles.info}>{dateAsig}</p>
                {/* <h4 className={styles.subtitles}>Hora de inicio</h4>
                <p>17:30</p> */}
                <h4 className={styles.subtitles}>Link de la sesión</h4>
                <a className={styles.linkSession} href={link}>
                    {link}
                </a>
                <p className={styles.message}>¡ Recuerda debes diligenciar el formulario de la sesión antes de asistir a esta !</p>
                <Link to={`/form-student/${id}`} className={styles.btn}>ver formulario </Link>
                <p className={styles.message}>¡ Recuerda debes diligenciar el informe de la sesión despues de asistir a esta !</p> 
                <Link to={`/inform-student/${id}`} className={styles.btn}> ver informe </Link> 
                </div>
            </>
    )
}

export default schedulledSessionCard


