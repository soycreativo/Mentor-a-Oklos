import React from 'react';


const WelcomeAdmi = () => {
  return (
    
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="barnav">Bienvenidos Admininistradores</h1>
      <div className="all">
        <div className="intro">

          <br></br>
          <br></br>
          <h2 className="go">¡Empieza aquí!</h2>
        </div>
        <div className="container">
          <div className="back">
            <div className="card">
              <div className="box">
                <div className="content">


                  <a href="#n" className="next">Ver Estudiantes</a>
                </div>
              </div>
              {/* <h1 className="little">.hola.</h1> */}
            </div>
          </div>

          <div className="back">
            <div className="card">
              <div className="box">
                <div className="content">

                  <a href="#n" className="next">Ver Mentores</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default WelcomeAdmi