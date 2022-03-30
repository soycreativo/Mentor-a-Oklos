import style from "./ListStudentMentor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function ListStudentMentor(props) {
  const { students, mentors, done, match, calculateMatch } = props;

  return (
    <div className={style.container}>
      <div>
        <h2>Lista de Estudiantes</h2>
        <div class={style.containerTable}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Id </th>
                <th>1° Nombre</th>
                <th>2° Nombre</th>
                <th>1° Apellido</th>
                <th>2° Apellido</th>
                <th>N° Teléfono </th>
                <th>E-mail</th>
              </tr>
            </thead>

            <tbody>
              {students.map((e, index) => {
                return (
                  <tr key={e.id}>
                    <td>{index + 1}</td>
                    <td>{e.user_id.name}</td>
                    <td>{e.user_id.middleName}</td>
                    <td>{e.user_id.lastName}</td>
                    <td>{e.user_id.secondSurname}</td>
                    <td>{e.user_id.contactNumber}</td>
                    <td>{e.user_id.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2>Lista de Mentores</h2>
        <div class={style.containerTable}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Id </th>
                <th>1° Nombre</th>
                <th>2° Nombre</th>
                <th>1° Apellido</th>
                <th>2° Apellido</th>
                <th>N° Teléfono </th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {mentors.map((e, index) => {
                return (
                  <tr key={e.id}>
                    <td>{index + 1}</td>
                    <td>{e.user_id.name}</td>
                    <td>{e.user_id.middleName}</td>
                    <td>{e.user_id.lastName}</td>
                    <td>{e.user_id.secondSurname}</td>
                    <td>{e.user_id.contactNumber}</td>
                    <td>{e.user_id.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {done && (
        <div>
          <h2>Match Estudiante Mentor</h2>
          <div class={style.containerTable}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>N° </th>
                  <th>Nombres Estudiante</th>
                  <th>Apellidos Estudiante</th>
                  <th>Nombres Mentor</th>
                  <th>Apellidos Mentor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {match.map((e, index) => {
                  return (
                    <tr key={e.id}>
                      <td>{index + 1}</td>
                      <td>{e.nameEstudent}</td>
                      <td>{e.lastNameEstudent}</td>
                      <td>{e.nameMentor}</td>
                      <td>{e.lastNameMentor}</td>
                      <td>
                        <div className={style.containerbuttonactions}>
                          <button
                            id={style.update}
                            /* onClick={() => openedClosedModalVer()} */
                          >
                            <FontAwesomeIcon icon={faUserPlus} />
                          </button>

                          <button
                            id={style.update}
                            /* onClick={() => openedClosedModalVer()} */
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={style.containerbutton}>
            <button>Confirmar Match</button>
          </div>
        </div>
      )}
      <div className={style.containerbutton}>
        <button
          style={{ display: done ? "none" : "block" }}
          onClick={calculateMatch}
        >
          Hacer Match
        </button>
      </div>
    </div>
  );
}
