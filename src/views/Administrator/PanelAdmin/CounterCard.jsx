import React from 'react';
import PanelAdmin from './PanelAdmin';


const WelcomeCard = () => {
    return (
        <div>   
            <div className="container">
              <div className="back">
                <div className="card">
                  <div className="box">
                    <div className="content">
                      <h3>RESUMEN</h3>
                      <ul className="list">
                          <li>Cantidad de estudiantes actuales</li>
                          <li>Cantidad de mentores</li>
                          <li>Total estudiantes asignados</li>
                          <li>Total de forms diligenciados estudiantes S1,S2,S3</li>
                          <li>Total de forms diligenciados mentores S1,S2,S3</li>
                      </ul>
                      
                    </div>              
                  </div>
                  {/* <h1 className="little">.hola.</h1> */}
                </div>
              </div>  
          </div>
        </div>
    )
}

export default WelcomeCard;
