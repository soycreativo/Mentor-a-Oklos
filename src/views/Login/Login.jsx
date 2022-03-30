import style from './Login.module.css';
import logo from '../../assets/Logo/programateAcademyLogo.png';
import { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
	const { setRole } = props;
	const backendUrl = process.env.REACT_APP_BACKEND_URL;

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	async function sendLogin(e){
		e.preventDefault();
		try{
			await axios.get(`${backendUrl}/login/${email}/${password}`)
				.then(response => {
					setRole(response.data[0].role);
				});
		}catch(err){
			console.log(err);
		}
	}

	return (
		<div className={style.container}>
			<div className="container-login-page">
				<img className="logoLogin" src={logo} alt="logo-programate" />
				<h2 className="loginTitle">Ingresa a Okhlos</h2>

				<form
					className="form"
					onSubmit={() => {
						console.log('');
					}}
				>
					<div className="container-login-form-content">
						<input
							label="Correo"
							placeholder="ejemplo@ejemplo.com"
							name="email"
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>

						<input
							label="Contraseña"
							placeholder="********"
							type="password"
							name="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<button
						className="button-login"
						type="submit"
						onClick={sendLogin}
					>
						Ingresar
					</button>
				</form>
			</div>
		</div>
	);
}
