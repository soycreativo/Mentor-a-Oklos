

const sessionCard = () => {
    return (
        <div>
            <div className={styles.whitebox}>
                <h3 className={styles.title}>
                {`Sesión ${numSession}`} 
                </h3>
                <h4 className={styles.subtitles} >
                    El encuentro con tu mentor será el día
                </h4>
                <p className={styles.info}>12-Noviembre / 2021</p>
                <h4 className={styles.subtitles}>Hora de inicio</h4>
                <p>17:30</p>
                <h4 className={styles.subtitles}>Link de la sesión</h4>
                <a className={styles.linkSession} href="https://us02web.zoom.us/j/89970425043?pwd=UUxGdERFa3BSbHU5OG5qYVdWeEtOQT09">
                    https://us02web.zoom.us/j/89970425043?pwd=UUxGdERFa3BSbHU5OG5qYVdWeEtOQT09
                </a>
                <p className={styles.message}>{sessionObjective}</p>
                <Link to={`/form-student/${id}`} className={styles.btn}>Ir al formulario de la sesión</Link> 
                </div>
        </div>
    )
}

export default sessionCard
