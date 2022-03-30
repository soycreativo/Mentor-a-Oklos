import React from 'react';
import styles from'./Table.module.css';

/*componente tabla */ 
export default function Table(props) {
    return (
        <div className={styles.Crud}>
            
            <table>
                
                <thead>
                    <> 
                     {props.th}
                    </>
                </thead>
                
                <tbody>
                
                    <>
                     {props.th2}

                    </>
                    
                </tbody>
            
            </table>
      </div>
  
            
        
    )
}


