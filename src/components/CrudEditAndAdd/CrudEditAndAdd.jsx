import React from 'react'
import Styles from'./CrudEdit.module.css';


const CrudEditAndAdd = (props) => {
    return (
     <div className={Styles.container}>
        

        <div className={Styles.box}>

            <form action="">
                
                    
                    <input type="text" name="Nombre" id="Nombre" placeholder="Nombre"/>

                  
                    <input type="text" name="Apellido" id="Apellido"  placeholder="Apellido"/>

                   
                    <input type="text" name="Edad" id="Edad"  placeholder="Edad"/>

                    
                    <input type="text" name="Género" id="Genero"  placeholder="Genero"/>

                   
                    <input type="text" name="Intereses" id="Intereses"  placeholder="Intereses" />

                    
                    <input type="text" name="Programa" id="Programa"  placeholder="Programa"/>

                    
                    <input type="text" name=" Mentor" id=" Mentor"  placeholder="Mentor"/>
                    
            </form>

        </div>
                 <button>{props.button}</button>
    </div>
      
    
    );
}
 
export default CrudEditAndAdd;