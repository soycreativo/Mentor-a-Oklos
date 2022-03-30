import { useState, useEffect } from "react";
import styles from "./Style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField } from "@material-ui/core";
import Axios from "axios";
import Swal from "sweetalert2";

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

//Alert editar
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
  })
};

//Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    maxWidth: 600,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  TextField: {
    display: "inline-block",
  },

  iconos: {
    cursor: "pointer",
    backgroundcolor: "blue",
  },
  inputMaterial: {
    width: "100%",
    height: "2.5rem",
  },
  h3: {
    fontFamily: "Gilroy-ExtraBold ",
    color: "#4caf50",
    margin: "0",
  },
  Button: {
    backgroundColor: "#ffdf5f",
    color: "#010101",
    margin: "0rem 0.5rem 0rem 0rem",
    "&:hover": {
      backgroundColor: "#FFCC02",
    },
  },
}));

const CrudStudents = () => {
  const Styles = useStyles();
  const [modalinsertar, setmodalinsertar] = useState(false);
  const [modaleditar, setmodaleditar] = useState(false);
  const [modalver, setmodalver] = useState(false);
  //Insert saved module data
  const [SavedData, setSavedData] = useState({
    name: "",
    middleName: "",
    lastName: "",
    secondSurname: "",
    actualAge: "",
    gender: "",
    program: "",
    email: "",
    contactNumber: "",
    cohorte: "",
    role: 1,
    estado: "",
  });
  //base Url of deploy
  const baseUrl = process.env.REACT_APP_BACKEND_URL
  ;
  //Function to insert the data written in the module.
  const InsertData = (e) => {
    const { name, value } = e.target;
    setSavedData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(SavedData);
  };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    Axios({
      url: `${baseUrl}/students`,
    })
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStudents]);

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
      <h3 className={styles.h3}>AGREGAR NUEVO ESTUDIANTE </h3>
      <br />
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="id"
            className={Styles.inputMaterial}
            label="id"
            onChange={InsertData}
            value={SavedData && SavedData.id}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="name"
            className={Styles.inputMaterial}
            label="Primer Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.name}
          />

          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="middleName"
            className={Styles.inputMaterial}
            label="Segundo Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.middleName}
          />
          <br />
        </div>

        <div className="form-group col-md-6">
          <TextField
            name="lastName"
            className={Styles.inputMaterial}
            label="Primer Apellido"
            onChange={InsertData}
            value={SavedData && SavedData.lastName}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="secondSurname"
            className={Styles.inputMaterial}
            label="Segundo apellido"
            onChange={InsertData}
            value={SavedData && SavedData.secondSurname}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="actualAge"
            className={Styles.inputMaterial}
            label="Edad"
            onChange={InsertData}
            value={SavedData && SavedData.actualAge}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Género"
            value={SavedData && SavedData.Género}
          >
            <option value="0" selected="">
              Género
            </option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="program"
            value={SavedData && SavedData.program}
            onChange={InsertData}
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
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="contactNumber"
            className={Styles.inputMaterial}
            label="Celular"
            onChange={InsertData}
            value={SavedData && SavedData.contactNumber}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="cohorte"
            className={Styles.inputMaterial}
            label="cohorte"
            onChange={InsertData}
            value={SavedData && SavedData.cohorte}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="password"
            className={Styles.inputMaterial}
            label="Contraseña"
            onChange={InsertData}
            value={SavedData && SavedData.password}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="mentor"
            className={Styles.inputMaterial}
            label="Mentor"
            onChange={InsertData}
            value={SavedData && SavedData.cohorte}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
        <select
          type="select"
          className="form-control"
          name="estado"
          onChange={InsertData}
          value={SavedData && SavedData.MentorAssignment}
          aria-label="Default select example"
        >
          <option value="0" selected="">
            Estado
          </option>
          <option value="Habilitado">Habilitado</option>
          <option value="Masculino">Deshabilitado</option>
        </select>
        </div>
      </div>

      <br />
      <div align="center">
        <button className={Styles.Button} onClick={()=>Alertcreate() &  openedClosedModalInsertar() } /* onClick={petitionPost} */>
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
      <h3 className={styles.h3}>EDITAR ESTUDIANTE </h3>
      <br />
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="id"
            className={Styles.inputMaterial}
            label="id"
            onChange={InsertData}
            value={SavedData && SavedData.id}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="name"
            className={Styles.inputMaterial}
            label="Primer Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.name}
          />

          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="middleName"
            className={Styles.inputMaterial}
            label="Segundo Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.middleName}
          />
          <br />
        </div>

        <div className="form-group col-md-6">
          <TextField
            name="lastName"
            className={Styles.inputMaterial}
            label="Primer Apellido"
            onChange={InsertData}
            value={SavedData && SavedData.lastName}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="secondSurname"
            className={Styles.inputMaterial}
            label="Segundo apellido"
            onChange={InsertData}
            value={SavedData && SavedData.secondSurname}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="actualAge"
            className={Styles.inputMaterial}
            label="Edad"
            onChange={InsertData}
            value={SavedData && SavedData.actualAge}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Género"
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
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="program"
            onChange={InsertData}
            value={SavedData && SavedData.program}
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
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
       
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="contactNumber"
            className={Styles.inputMaterial}
            label="Celular"
            onChange={InsertData}
            value={SavedData && SavedData.contactNumber}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="cohorte"
            className={Styles.inputMaterial}
            label="cohorte"
            onChange={InsertData}
            value={SavedData && SavedData.cohorte}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="password"
            className={Styles.inputMaterial}
            label="Contraseña"
            onChange={InsertData}
            value={SavedData && SavedData.password}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="mentor"
            className={Styles.inputMaterial}
            label="Mentor"
            onChange={InsertData}
            value={SavedData && SavedData.cohorte}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
        <select
          type="select"
          className="form-control"
          name="estado"
          onChange={InsertData}
          value={SavedData && SavedData.MentorAssignment}
          aria-label="Default select example"
        >
          <option value="0" selected="">
            Estado
          </option>
          <option value="Habilitado">Habilitado</option>
          <option value="Masculino">Deshabilitado</option>
        </select>
        </div>
      </div>

      <br />
      <div align="center">
        <button
          className={styles.button}
          onClick={() => Alertedit() & openedClosedModalEditar()}
        >
          Guardar Cambios
        </button>

        <button
          className={styles.Button}
          onClick={() => openedClosedModalEditar()}
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  //Modal structure Insertar

  const bodyVer = (
    <div className={styles.modal}>
      <h3 className={styles.h3}>VER ESTUDIANTE </h3>
      <br />
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="id"
            className={Styles.inputMaterial}
            label="id"
            onChange={InsertData}
            value={SavedData && SavedData.id}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="name"
            className={Styles.inputMaterial}
            label="Primer Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.name}
          />

          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="middleName"
            className={Styles.inputMaterial}
            label="Segundo Nombre"
            onChange={InsertData}
            value={SavedData && SavedData.middleName}
          />
          <br />
        </div>

        <div className="form-group col-md-6">
          <TextField
            name="lastName"
            className={Styles.inputMaterial}
            label="Primer Apellido"
            onChange={InsertData}
            value={SavedData && SavedData.lastName}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="secondSurname"
            className={Styles.inputMaterial}
            label="Segundo apellido"
            onChange={InsertData}
            value={SavedData && SavedData.secondSurname}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="actualAge"
            className={Styles.inputMaterial}
            label="Edad"
            onChange={InsertData}
            value={SavedData && SavedData.actualAge}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Género"
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
        <div className="form-group col-md-6">
          <select
            type="select"
            className="form-control"
            name="Género"
            onChange={InsertData}
            value={SavedData && SavedData.program}
            aria-label="Default select example"
          >
            <option value="0" selected="">
              Programa
            </option>
            <option value="Femenino">Bootcamp Prográmate</option>
            <option value="Masculino">Administración de Empresas</option>
          </select>
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="email"
            className={Styles.inputMaterial}
            label="E-mail"
            onChange={InsertData}
            value={SavedData && SavedData.email}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="contactNumber"
            className={Styles.inputMaterial}
            label="Celular"
            onChange={InsertData}
            value={SavedData && SavedData.contactNumber}
          />
          <br />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="cohorte"
            className={Styles.inputMaterial}
            label="cohorte"
            onChange={InsertData}
            value={SavedData && SavedData.cohorte}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
          <TextField
            name="password"
            className={Styles.inputMaterial}
            label="Contraseña"
            onChange={InsertData}
            value={SavedData && SavedData.password}
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <TextField
            name="mentor"
            className={Styles.inputMaterial}
            label="Mentor"
            onChange={InsertData}
            value={SavedData && SavedData.cohorte}
          />
          <br />
        </div>
        <div className="form-group col-md-6">
        <select
          type="select"
          className="form-control"
          name="estado"
          onChange={InsertData}
          value={SavedData && SavedData.MentorAssignment}
          aria-label="Default select example"
        >
          <option value="0" selected="">
            Estado
          </option>
          <option value="Habilitado">Habilitado</option>
          <option value="Masculino">Deshabilitado</option>
        </select>
        </div>
      </div>
      <br />
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
    <>
      <div className={styles.container}>
        <h1>TABLA CONTROL ESTUDIANTES</h1>
        <div className={styles.header}>
          <input type="search" placeholder="Busca un Estudiante" />
          <button onClick={() => openedClosedModalInsertar()}>
            Insertar Estudiante
          </button>

          <button>Insertar CVS</button>
          <button>Descargar CVS</button>
        </div>

        <div class={styles.containerTable}>
          <table className={styles.table}>
            <thead>
              {
                <tr>
                  <th>id</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Edad</th>
                  <th>Genero</th>
                  <th>Teléfono</th>
                  <th>E-mail</th>
                  <th>Intereses</th>
                  <th>Programa</th>
                  <th>Mentor</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              }
            </thead>
            <tbody>
              {students.map((e) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.birth_date}</td>
                    <td>{e.gender}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>{e.interest}</td>
                    <td>{e.program}</td>
                    <td>{e.mentor}</td>
                    <td>{e.active}</td>
                    <td>
                      <div className={styles.containerbutton}>
                        <button id={styles.update}>
                          <FontAwesomeIcon
                            icon={faEye}
                            onClick={() => openedClosedModalVer()}
                          />
                        </button>
                        <button id={styles.update}>
                          <FontAwesomeIcon
                            icon={faEdit}
                            onClick={() => openedClosedModalEditar()}
                          />
                        </button>
                        <button
                          id={styles.delete}
                          onClick={() => Alertdelete()}
                        >
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
    </>
  );
};

export default CrudStudents;