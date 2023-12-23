import React, { useState, useRef } from 'react';
import axios from 'axios';
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import {
  Container,
  Img,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Btn,
  User
} from './styles';

// JSX

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser () {

    const data = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })

    console.log(data);

    // setUsers([
    //   ...users,
    //   {
    //     id: Math.random(),
    //     name: inputName.current.value,
    //     age: inputAge.current.value
    //   }])
  }

  const deleteUser = (userId) => {
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }


  return (
    <Container>
      <Img alt='logo-image' src={People} />

      <ContainerItens>

        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Btn onClick={addNewUser}>
          Cadastrar
          <img alt='seta' src={Arrow}></img>
        </Btn>

        <ul>
          {
            users.map(user => (

              <User key={user.id}>
                <div className='infoUser'>
                  <p>{user.name}</p>
                  <p>{user.age}</p>
                </div>
                <button onClick={() => deleteUser(user.id)}><img alt='lata-de-lixo' src={Trash} /></button>
              </User>

            ))
          }
        </ul>

      </ContainerItens>
    </Container>
  )
}

export default App