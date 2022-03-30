import { useEffect, useState } from 'react'
import Styles from './MultipleChoice.module.css'
import Card from '../../../components/Card/Card'
import Select from 'react-select'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'

const MultipleChoice = () => {


  const [data, setData] = useState([])
  const save = []

  const navigate = useNavigate()

  const auth = useSelector(state => state.auth)




  useEffect(() => {
    axios({
      url: `${baseUrl}/api/profile-edit`
    })
      .then(response => {
        setData(response.data)

      })
      .catch(error => {
        console.log(error)
      })
  }, [setData])


  //function to transform API data from string to array
  function debugDat(data) {

    data.forEach(interest => {
      interest.interestsMentor.forEach((oneInterest, index) => {
        save.push({ value: oneInterest, label: oneInterest })
      })
    })
  }

  debugDat(data)




  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }


  const uniqueInterest = removeDuplicates(save, "value");


  const maxOptions = 3;

  const [selectedOption, setSelectedOption] = useState([]);

  const handleTypeSelect = e => {
    setSelectedOption(e);
  };


  const sendSelect = selectedOption.map(option => (option.value));


  const { user } = auth




  const isMentor = () => {
    if (user) {
      if (user.role === 4) {
        navigate('/welcome-mentor')
      } else if (user.role === 9) {
        navigate('/CrudStudents')
      }
    }
  }

  isMentor()

  // const navigate = useNavigate() 

  const handleUpdateInterest = () => {
    if (sendSelect.length === 3) {
      const userinterestsStudent = sendSelect
      // console.log(userinterestsStudent)
      const idStudent = user.id
      // console.log(idStudent)
      axios
        .post(`${baseUrl}/api/studentsPerfil-control-update/${idStudent}`, { interestsStudent: userinterestsStudent })
      navigate('/thanks-student')
    } else {
      Swal.fire('Por favor', 'Selecciona 3 intereses', 'info')
    }

  }

  return (
    <section className={Styles.contAll}>
      <div className={Styles.contenedor}>
        <div className={Styles.header}>
          <p>Completa la siguiente información para avanzar en la plataforma.</p>
        </div>

        <Card
          container={
            <>
              <h3 className={Styles.titleCardStudent}>Intereses generales</h3>
              <p>Elige máximo tres intereses:</p>

              <Select className={Styles.selectStudent}
                name="interest"
                options={selectedOption.length === maxOptions ? [] : uniqueInterest}
                isMulti
                onChange={handleTypeSelect}

                noOptionsMessage={() => {
                  return selectedOption.length === maxOptions
                    ? 'Gracias, ya elegiste las opciones maximas'
                    : 'No options available';
                }}
              />
              <button onClick={handleUpdateInterest}>Finalizar</button>
              <br />
            </>
          }
        />
      </div>
      <div className={Styles.foot}></div>
    </section>
  )
}

export default MultipleChoice
