import { Routes, Route, useNavigate } from 'react-router-dom';

import NavAdmin from './views/Administrator/NavAdmin/NavAdmin';
import Login from './views/Login/Login';

// import NotFound from './views/General/NotFound'
import Footer from './components/Footer/Footer';
import MatchForm from './views/Administrator/Match/MatchForm';
// Administrator imports of CRUDS //
import CrudMentors from './views/Administrator/Cruds/CrudMentor/CrudMentor';
import CrudStudents from './views/Administrator/Cruds/CrudStudents/CrudStudents';
import CrudSessions from './views/Administrator/Cruds/CrudSessions/CrudSessions';
import CrudSessionsDetail from './views/Administrator/Cruds/CrudSessionDetail/CrudSessionDetail';
import { useEffect, useState } from 'react';
import FormMentor from './views/Mentor/FormMentor';

function App() {
	// role 3: Student
	// role 2: Mentor
	// role 1: Administrator
	const [ role, setRole ] = useState(0);
	let navigate = useNavigate();

	useEffect(() => {
		if(role === 0){
		}else if(role === 1){
			window.location.href = "/administrator";
			/* navigate("/administrator"); */
		}else if(role === 2){
			window.location.href = "/mentor";
			/* navigate("/mentor"); */
		}else if(role === 3){
			window.location.href = "/student";
			/* navigate("/student") */
		}
	}, [navigate, role]);

	return (
		<>
			<NavAdmin />
			<Routes>
				{/* Login's routes */}
				<Route path="/" element={<Login setRole={setRole}/>} />

				{/* Administrator's routes */}
				<Route path="/administrator" element={<MatchForm />} />
				<Route path="/MatchForm" element={<MatchForm />} />
				<Route path="/CrudStudents" element={<CrudStudents />} />
				<Route path="/crud-mentors" element={<CrudMentors />} />
				<Route path="/crud-sessions-detail" element={<CrudSessionsDetail />} />
				<Route path="/crud-sessions" element={<CrudSessions />} />
				
			

				{/* Student's routes */}
				<Route path="/student" element={<CrudSessions />} />

				{/* Mentor's routes */}
				<Route path="/mentor" element={<CrudMentors />} />
				<Route path="/FormMentor" element={<FormMentor />} />
			

			</Routes>
			<Footer />
		</>
	);
}

export default App;
