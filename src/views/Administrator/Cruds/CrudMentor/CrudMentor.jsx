import { useState, useEffect } from "react";
import styles from "./CrudMentor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField } from "@material-ui/core";
import Axios from "axios";
import Swal from "sweetalert2";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

//Yellow row data
const Articles = [
  {
    Id: "id",
    Nombres: "Nombres",
    Apellidos: "Apellidos",
    Edad: "Edad",
    Género: "Género",
    Teléfono: "Teléfono",
    Email: "Email",
    Intereses: "Intereses ",
    Programa: "Programa ",
    Carrera: " Carrera  ",
    Empresa: " Empresa  ",
    AsignaciónEst: "Cargo/empleo",
    estado: "Estado",
  },
];
//Alert delete

const Alertdelete = () => {
  Swal.fire({
    showCloseButton: true,
    closeButtonText: "X",
    title: "¿Está seguro que quiere eliminar este registro?",
    text: "Si hace esto, no podrá revertirlo",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "No",
    confirmButtonColor: "#ffcc02",
    cancelButtonColor: "#000000",
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        showCloseButton: true,
        title: "Eliminado",
        text: "El registro ha sido eliminado con éxito",
        icon: "success",
        showConfirmButton: true,
        confirmButtonColor: "#ffcc02",
        confirmButtonText: "Ok",
      });
    }
  });
};

//Alert Edit

const Alertedit = () => {
  Swal.fire({
    showCloseButton: true,
    closeButtonText: "X",
    title: "¿Desea guardar los cambios?",
    icon: "question",
    showCancelButton: true,
    cancelButtonText: "No",
    confirmButtonColor: "#ffcc02",
    cancelButtonColor: "#000000",
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        showCloseButton: true,
        title: "¡Listo!",
        text: "Cambios guardados con éxito",
        icon: "success",
        showConfirmButton: true,
        confirmButtonColor: "#ffcc02",
        confirmButtonText: "Ok",
      });
    }
  });
};

//Alert create

const Alertcreate = () => {
  Swal.fire({
    showCloseButton: true,
    closeButtonText: "X",
    title: "Registro creado con éxito",
    icon: "success",
    confirmButtonColor: "#ffcc02",
    confirmButtonText: "Ok",
  });
};

//Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
  h3: {
    fontFamily: "Gilroy-ExtraBold ",
    color: "#92C149",
  },
  Button: {
    backgroundColor: "#FFCC02",
    color: "#010101",
    margin: "0rem 0.5rem 0rem 0rem",
    "&:hover": {
      backgroundColor: "#92C149",
    },
  },
}));

const CrudMentor = () => {
  const Styles = useStyles();
  const [modalinsertar, setmodalinsertar] = useState(false);
  const [modaleditar, setmodaleditar] = useState(false);
  const [modalver, setmodalver] = useState(false);
  //Insert saved module data
  const [SavedData, setSavedData] = useState({
    id: "",
    Nombres: "",
    Apellidos: "",
    Edad: "",
    Género: "",
    Teléfono: "",
    Email: "",
    Intereses: "",
    Programa: "",
    Carrera: "",
    Empresa: "",
    AsignaciónEst: "",
    estado: "",
  });
  //Function to insert the data written in the module.
  const InsertData = (e) => {
    const { name, value } = e.target;
    setSavedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(SavedData);
  };

  //function that inserts data into the database
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    Axios({
      url: `${baseUrl}/mentors`,
    })
      .then((response) => {
        setMentors(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMentors]);

  /*const petitionPost=async()=>{
  await axios.post(Database,SavedData)
  .then(response=>{
    setData(data.concat(response.data),
    openedClosedModalInsertar()
  )
  })
}*/

  //one-button boolean function
  const openedClosedModalInsertar = () => {
    setmodalinsertar(!modalinsertar);
  };

  const openedClosedModalEditar = () => {
    setmodaleditar(!modaleditar);
  };

  const openedClosedModalVer = () => {
    setmodalver(!modalver);
  };

  //Modal structure Insertar

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3 className={styles.h3}>AGREGAR NUEVO MENTOR</h3>

      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="id"
            className={Styles.inputMaterial}
            label="Id"
            onChange={InsertData}
            value={SavedData && SavedData.id}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Nombres"
            className={Styles.inputMaterial}
            label="Nombres"
            onChange={InsertData}
            value={SavedData && SavedData.Nombres}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Apellidos"
            className={Styles.inputMaterial}
            label="Apellidos"
            onChange={InsertData}
            value={SavedData && SavedData.Apellidos}
          />
        </div>
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Género"
            onChange={InsertData}
            value={SavedData && SavedData.Género}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Género
            </option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Edad"
            className={Styles.inputMaterial}
            label="Edad"
            onChange={InsertData}
            value={SavedData && SavedData.Edad}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Hijos"
            className={Styles.inputMaterial}
            label="Hijos"
            onChange={InsertData}
            value={SavedData && SavedData.Hijos}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Intereses"
            className={Styles.inputMaterial}
            label="Intereses"
            onChange={InsertData}
            value={SavedData && SavedData.Intereses}
          />
        </div>
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Programa"
            onChange={InsertData}
            value={SavedData && SavedData.Programa}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Programa
            </option>
            <option value="Bootcamp Prográmate">Bootcamp Prográmate</option>
            <option value="Administración de Empresas">
              Administración de Empresas
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Carrera"
            className={Styles.inputMaterial}
            label="Carrera"
            onChange={InsertData}
            value={SavedData && SavedData.Carrera}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Empresa"
            className={Styles.inputMaterial}
            label="Empresa"
            onChange={InsertData}
            value={SavedData && SavedData.Empresa}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="AsignaciónEst"
            className={Styles.inputMaterial}
            label="Asignación Estudiante"
            onChange={InsertData}
            value={SavedData && SavedData.AsignaciónEst}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="estado"
            onChange={InsertData}
            value={SavedData && SavedData.estado}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Estado
            </option>
            <option value="Habilitado">Habilitado</option>
            <option value="Masculino">Deshabilitado</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="telefono"
            className={Styles.inputMaterial}
            label="Télefono"
            onChange={InsertData}
            value={SavedData && SavedData.telefono}
          />
        </div>
      </div>

      <br></br>

      <div align="center">
        <button
          className={styles.button}
          onClick={() =>
            Alertcreate() & openedClosedModalInsertar()
          } /*onClick={()=>petitionPost()}*/
        >
          Insertar
        </button>
        <button
          className={styles.button}
          onClick={() => openedClosedModalInsertar()}
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  //Modal structure Editar

  const bodyEditar = (
    <div className={styles.modal}>
      <h3 className={styles.h3}>EDITAR MENTOR</h3>

      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="id"
            className={Styles.inputMaterial}
            label="Id"
            onChange={InsertData}
            value={SavedData && SavedData.id}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Nombres"
            className={Styles.inputMaterial}
            label="Nombres"
            onChange={InsertData}
            value={SavedData && SavedData.Nombres}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Apellidos"
            className={Styles.inputMaterial}
            label="Apellidos"
            onChange={InsertData}
            value={SavedData && SavedData.Apellidos}
          />
        </div>
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Género"
            onChange={InsertData}
            value={SavedData && SavedData.Género}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Género
            </option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Edad"
            className={Styles.inputMaterial}
            label="Edad"
            onChange={InsertData}
            value={SavedData && SavedData.Edad}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Hijos"
            className={Styles.inputMaterial}
            label="Hijos"
            onChange={InsertData}
            value={SavedData && SavedData.Hijos}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Intereses"
            className={Styles.inputMaterial}
            label="Intereses"
            onChange={InsertData}
            value={SavedData && SavedData.Intereses}
          />
        </div>
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Programa"
            onChange={InsertData}
            value={SavedData && SavedData.Programa}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Programa
            </option>
            <option value="Bootcamp Prográmate">Bootcamp Prográmate</option>
            <option value="Administración de Empresas">
              Administración de Empresas
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Carrera"
            className={Styles.inputMaterial}
            label="Carrera"
            onChange={InsertData}
            value={SavedData && SavedData.Carrera}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Empresa"
            className={Styles.inputMaterial}
            label="Empresa"
            onChange={InsertData}
            value={SavedData && SavedData.Empresa}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="AsignaciónEst"
            className={Styles.inputMaterial}
            label="Asignación Estudiante"
            onChange={InsertData}
            value={SavedData && SavedData.AsignaciónEst}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="estado"
            onChange={InsertData}
            value={SavedData && SavedData.estado}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Estado
            </option>
            <option value="Habilitado">Habilitado</option>
            <option value="Masculino">Deshabilitado</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="telefono"
            className={Styles.inputMaterial}
            label="Télefono"
            onChange={InsertData}
            value={SavedData && SavedData.telefono}
          />
        </div>
      </div>

      <br></br>

      <div align="center">
        <button
          className={styles.button}
          onClick={() => Alertedit() & openedClosedModalEditar()}
        >
          Guardar Cambios
        </button>
        <button
          className={styles.button}
          onClick={() => openedClosedModalEditar()}
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  //Modal structure Ver

  const bodyVer = (
    <div className={styles.modal}>
      <h3 className={styles.h3}>VER MENTOR</h3>

      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="id"
            className={Styles.inputMaterial}
            label="Id"
            onChange={InsertData}
            value={SavedData && SavedData.id}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Nombres"
            className={Styles.inputMaterial}
            label="Nombres"
            onChange={InsertData}
            value={SavedData && SavedData.Nombres}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Apellidos"
            className={Styles.inputMaterial}
            label="Apellidos"
            onChange={InsertData}
            value={SavedData && SavedData.Apellidos}
          />
        </div>
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Género"
            onChange={InsertData}
            value={SavedData && SavedData.Género}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Género
            </option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Edad"
            className={Styles.inputMaterial}
            label="Edad"
            onChange={InsertData}
            value={SavedData && SavedData.Edad}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Hijos"
            className={Styles.inputMaterial}
            label="Hijos"
            onChange={InsertData}
            value={SavedData && SavedData.Hijos}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Intereses"
            className={Styles.inputMaterial}
            label="Intereses"
            onChange={InsertData}
            value={SavedData && SavedData.Intereses}
          />
        </div>
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Programa"
            onChange={InsertData}
            value={SavedData && SavedData.Programa}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Programa
            </option>
            <option value="Bootcamp Prográmate">Bootcamp Prográmate</option>
            <option value="Administración de Empresas">
              Administración de Empresas
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="Carrera"
            className={Styles.inputMaterial}
            label="Carrera"
            onChange={InsertData}
            value={SavedData && SavedData.Carrera}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="Empresa"
            className={Styles.inputMaterial}
            label="Empresa"
            onChange={InsertData}
            value={SavedData && SavedData.Empresa}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <TextField
            name="AsignaciónEst"
            className={Styles.inputMaterial}
            label="Asignación Estudiante"
            onChange={InsertData}
            value={SavedData && SavedData.AsignaciónEst}
          />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="estado"
            onChange={InsertData}
            value={SavedData && SavedData.estado}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Estado
            </option>
            <option value="Habilitado">Habilitado</option>
            <option value="Masculino">Deshabilitado</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="telefono"
            className={Styles.inputMaterial}
            label="Télefono"
            onChange={InsertData}
            value={SavedData && SavedData.Teléfono}
          />
        </div>
      </div>

      <br></br>

      <div align="center">
        <button
          className={styles.button}
          onClick={() => openedClosedModalVer()}
        >
          Cerrar
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1>TABLA CONTROL MENTORES</h1>
      <div className={styles.header}>
        <input type="search" placeholder="Busca un Mentor" />
        <button onClick={() => openedClosedModalInsertar()}>
          Insertar Mentor
        </button>

        <button>Insertar CVS</button>
        <button>Descargar CVS</button>
      </div>

      {/*mapping the yellow row data*/}
      <div class={styles.containerTable}>
        <table className={styles.table}>
          <thead>
            {Articles.map((e) => {
              return (
                <tr>
                  <th>{e.Id}</th>
                  <th>{e.Nombres}</th>
                  <th>{e.Apellidos}</th>
                  <th>{e.Edad}</th>
                  <th>{e.Género}</th>
                  <th>{e.Teléfono}</th>
                  <th>{e.Email}</th>
                  <th>{e.Intereses}</th>
                  <th>{e.Programa}</th>
                  <th>{e.Carrera}</th>
                  <th>{e.Empresa}</th>
                  <th>{e.AsignaciónEst}</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              );
            })}
          </thead>
          <tbody>
            {mentors.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td> {e.last_name}</td>
                  <td>{e.birth_date}</td>
                  <td>{e.gender}</td>
                  <td>{e.phone}</td>
                  <td>{e.email}</td>
                  <td>{e.interest}</td>
                  <td>{e.program}</td>
                  <td>{e.studies}</td>
                  <td>{e.business}</td>
                  <td>{e.role}</td>
                  <td>{e.active}</td>
                  <td>
                    <div className={styles.containerbutton}>
                      <button
                        id={styles.delete}
                        onClick={() => openedClosedModalVer()}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        id={styles.update}
                        onClick={() => openedClosedModalEditar()}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>{" "}
                      <button id={styles.delete} onClick={() => Alertdelete()}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal open={modalinsertar} onClose={openedClosedModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal open={modaleditar} onClose={openedClosedModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalver} onClose={openedClosedModalVer}>
        {bodyVer}
      </Modal>
    </div>
  );
};

export default CrudMentor;
