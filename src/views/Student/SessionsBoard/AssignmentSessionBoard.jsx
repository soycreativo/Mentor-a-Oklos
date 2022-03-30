import React, { useEffect, useState } from 'react'
import AssignmentCard from '../../../components/schedulledSessionCard/AssignmentCard'
import Styles from './SessionsBoard.module.css'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'

const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'
function SessionsBoard () {
  const idStudent = useSelector(state => state.auth.user.id)
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    Axios({
      url: `${baseUrl}/api/dashboard/all/assigned-session/${idStudent}`
    })
      .then(response => {
        setSessions(response.data)
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [setSessions, idStudent])

  console.log(sessions)

  const SessionExist = () => {
    return (
      <div>
        <div className={Styles.board}>
          {sessions.map(session => (
            <AssignmentCard
              numSession={session.idSession.numSession}
              dateAsig={session.dateAsig}
              link={session.link}
              key={session.id}
              id={session.idSession.id}
            ></AssignmentCard>
          ))}
        </div>
      </div>
    )
  }

  const SessionNotExists = () => {
    return <p>no existe sesiones</p>
  }

  return <>{sessions.length > 0 ? <SessionExist /> : <SessionNotExists />}</>
}

export default SessionsBoard
