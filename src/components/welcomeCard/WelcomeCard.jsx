import React from 'react';
import styles from './welcomeCard.module.css'

const WelcomeCard = () => {
    return (
        <div>  
          <div className={styles.containerOne}>
            <div className={styles.progressContainer}>
                <div className={styles.progress}> 
                  <div className={styles.circle.active}>1</div>
                  <div className={styles.circle}>2</div>
                  <div className={styles.circle}>3</div>
              </div>
            </div>
          </div>
            <div className={styles.container}>
              <div className={styles.back}>
                <div className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.content}>
                    <h3>Querido/a estudiante</h3>
                      <ul className={styles.list}>

                          <li>Gracias por realizar la inscripción.</li>
                          <li>No olvides completar los 3 pasos para empezar tu proceso de mentoría.</li>
                          <li>Puedes contactar con tus formadores, si tienes alguna duda.</li>
                      </ul>
                      <a href="#n" className={styles.btn}>Siguiente</a>
                    </div>              
                  </div>
                  {/* <h1 className="little">.hola.</h1> */}
                </div>
              </div>  
          </div>
        </div>
    )
}

export default WelcomeCard
