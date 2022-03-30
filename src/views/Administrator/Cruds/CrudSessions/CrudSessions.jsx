import { useState, useEffect } from 'react';
import styles from './CrudSessions.module.css';
import SearchContainer from '../../../../components/SearchContainer/SearchContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField } from '@material-ui/core';
import Axios from 'axios';

import Swal from 'sweetalert2';
import zIndex from '@material-ui/core/styles/zIndex';


const Articles=[{
  Titulo:"Título" ,
  Fechadeinicio:"Fecha de inicio",
  Fechadefinalizacion:"Fecha de finalización",
  Descripcion:"Descripción",
  Estado:"Estado",
  
}]
/* toca conectar esto con la base de datos */
const Database=[{
	Titulo:"Titulo",
	Fechadeinicio:"Fecha de inicio",
  Fechadefinalizacion:"Fecha de finalizacion",
	Descripcion:"Descripcion",
	Estado:"Estado",
},
{
	Titulo:"Titulo" ,
	Fechadeinicio:"Fecha de inicio",
  Fechadefinalizacion:"Fecha de finalizacion",
	Descripcion:"Descripcion",
	Estado:"Estado",
},
{
	Titulo:"Titulo" ,
	Fechadeinicio:"Fecha de inicio",
  Fechadefinalizacion:"Fecha de finalizacion",
	Descripcion:"Descripcion",
	Estado:"Estado",
},
{
	Titulo:"Titulo" ,
	Fechadeinicio:"Fecha de inicio",
  Fechadefinalizacion:"Fecha de finalizacion",
	Descripcion:"Descripcion",
	Estado:"Estado",
},
{
	Titulo:"Titulo" ,
	Fechadeinicio:"Fecha de inicio",
  Fechadefinalizacion:"Fecha de finalizacion",
	Descripcion:"Descripcion",
	Estado:"Estado",
}
]


//Modal styles 
const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	iconos: {
		cursor: 'pointer',
	},
	inputMaterial: {
		width: '100%',
	},
	h3: {
		fontFamily: 'Gilroy-ExtraBold ',
		color: '#92C149',
	},
	Button: {
		backgroundColor: '#FFCC02',
		color: '#010101',
		margin: '0rem 0.5rem 0rem 0rem',
		'&:hover': {
			backgroundColor: '#92C149',
		},
	},
}));

const CrudSessions = () => {
	const Styles = useStyles();
	const [modalinsertar, setmodalinsertar] = useState(false);
	const [modaleditar, setmodaleditar] = useState(false);
	//Insert saved module data
	const [SavedData, setSavedData] = useState({
		id: '',
		Nombres: '',
		Apellidos: '',
		Edad: '',
		Género: '',
		Intereses: '',
		Programa: '',
		Carrera: '',
		Empresa: '',
		AsignaciónEst: '',
	});

	const baseUrl = process.env.REACT_APP_BACKEND_URL;

	//Function to insert the data written in the module.
	const InsertData = (e) => {
		const { name, value } = e.target;
		setSavedData((prevState) => ({
			...prevState,
			[name]: value,
		}));
		console.log(SavedData);
	};

	const [sessions, setSessions] = useState([]);

  useEffect(() => {
    Axios({
      url: `${baseUrl}/sessions`,
    })
      .then((response) => {
        setSessions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setSessions]);

	//one-button boolean function
	const openedClosedModalInsertar = () => {
		setmodalinsertar(!modalinsertar);
	};
	//one-button boolean function
	const openedClosedModalEditar = () => {
		setmodaleditar(!modaleditar);
	};

	//---------------------------------------alert from add--------------------------------------------------
	const alertAdd= () => {
		Swal.fire({
			showCloseButton: true,
			closeButtonText: 'X',
			title: '¿Desea insertar los datos?',
			icon: 'question',
			showCancelButton: true,
			cancelButtonText: 'No',
			confirmButtonColor: '#ffcc02',
			cancelButtonColor: '#000000',
			confirmButtonText: 'Si'
			
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire({
				showCloseButton: true,
				title: '¡Listo!',
				text: "Añadido con éxito",
				icon: 'success',
				showConfirmButton: true,
				confirmButtonColor: '#ffcc02',
				confirmButtonText: 'Ok',
				

			  })
			}
		
			
		  })
};
//-----------------------------------------------alert from edit-------------------------------------------
	const mostrarAlerta = () => {
		Swal.fire({
			showCloseButton: true,
			closeButtonText: 'X',
			title: '¿Desea guardar los cambios?',
			icon: 'question',
			showCancelButton: true,
			cancelButtonText: 'No',
			confirmButtonColor: '#ffcc02',
			cancelButtonColor: '#000000',
			confirmButtonText: 'Si'
			
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire({
				showCloseButton: true,
				title: '¡Listo!',
				text: "Cambios guardados con éxito",
				icon: 'success',
				showConfirmButton: true,
				confirmButtonColor: '#ffcc02',
				confirmButtonText: 'Ok',
				

			  })
			}
		
			
		  })
};

	//Modal structure Insertar

	const bodyInsertar = (
		<div className={styles.modal}>
			<h3 className={styles.h3}>AÑADIR UNA SESION</h3>
			<TextField
				name="Titulo"
				className={Styles.inputMaterial}
				label="Titulo"
				onChange={InsertData}
				value={SavedData && SavedData.Titulo}
			/>
			<br />
			<TextField
			    type="date"
				name="Fecha de inicio"
				className={Styles.inputMaterial}
				label="Fecha de inicio"
				onChange={InsertData}
				value={SavedData && SavedData.Fechadeinicio}
			/>
			<br />
			<TextField
			    type="date"
				name="Fecha de finalizacion"
				className={Styles.inputMaterial}
				label="Fecha de finalización"
				onChange={InsertData}
				value={SavedData && SavedData.Fechadefinalizacion}
			/>
			<br />
			<TextField
				name="Descripcion"
				className={Styles.inputMaterial}
				label="Descripción"
				onChange={InsertData}
				value={SavedData && SavedData.Descripcion}
			/>
			<br />
			{/* <TextField
				name="Género"
				className={Styles.inputMaterial}
				label="Estado"
				onChange={InsertData}
				value={SavedData && SavedData.Nombres}
			/> */}
			<br />
			<select type='text'>
			    <option value="0">Estado</option>
				<option value="Habilitado">Habilitado</option>
				<option value="Deshabilitado">Deshabilitado</option>

			</select>
			<br />
			<div align="center" >
				<button className={styles.button} onClick={() => alertAdd() & openedClosedModalInsertar()}/* onClick={()=>petitionPost()}*/>
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
	const bodyEditar = (
		<div className={styles.modal}>
			<h3 className={styles.h3}>EDITAR SESIÓN</h3>
			<TextField
				name="Titulo"
				className={Styles.inputMaterial}
				label="Titulo"
				onChange={InsertData}
				value={SavedData && SavedData.Titulo}
			/>
			<br />
			<TextField
			     type="date"
				name="Fecha de inicio"
				className={Styles.inputMaterial}
				label="Fecha de inicio"
				onChange={InsertData}
				value={SavedData && SavedData.Fechadeinicio}
			/>
			<br />
			<TextField
			    type="date"
				name="Fecha de finalizacion"
				className={Styles.inputMaterial}
				label="Fecha de finalización"
				onChange={InsertData}
				value={SavedData && SavedData.Fechadefinalizacion}
			/>
			<br />
			<TextField
				name="Descripcion"
				className={Styles.inputMaterial}
				label="Descripción"
				onChange={InsertData}
				value={SavedData && SavedData.Descripcion}
			/>
			<br />
			{/* <TextField
				name="Género"
				className={Styles.inputMaterial}
				label="Estado"
				onChange={InsertData}
				value={SavedData && SavedData.Nombres}
			/> */}
			<br />
			<select type='text'>
			    <option value="0">Estado</option>
				<option value="Habilitado">Habilitado</option>
				<option value="Deshabilitado">Deshabilitado</option>

			</select>
			<br />
			<div align="center" >
				<button className={styles.button} onClick={() => mostrarAlerta() & openedClosedModalEditar()}>
					Guardar cambios 
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

	return (
		<div className={styles.container}>
			<SearchContainer
				h1={'DETALLE DE SESIONES '}
				placeholder={'Buscar Sesión'}
				button={'Insertar Sesión'}
				onClick={() => openedClosedModalInsertar()}
			/>
			<div class={styles.containerTable}>
				<table className={styles.table}>
					<thead>
				{Articles.map((e) => {
					return (
						<tr>
							
							<th>{e.Titulo}</th>
							<th>{e.Fechadeinicio}</th>
							<th>{e.Fechadefinalizacion}</th>
							<th>{e.Descripcion}</th>
							<th>{e.Estado}</th>
							<th>Acciones</th>
							
						</tr>
					);
				})}

					</thead>
					<tbody>
				{sessions.map((e) => {
					return (
						<tr>
							<td>{e.title}</td>
							<td >{e.start_date}</td>
							<td >{e.end_date}</td>
							<td > {e.description}</td>
							<td >{e.state}</td>

							<>
								<td>
								<div className={styles.containerbutton}>
									<button id={styles.update} onClick={() => openedClosedModalEditar()}>
										<FontAwesomeIcon icon={faEdit} />
									</button>
									{/* <button id={styles.delete}>
										<FontAwesomeIcon icon={faTrashAlt} />
									</button> */}
									</div>
								</td>
								
							</>
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
			
		</div>
	);
};

export default CrudSessions;
