import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import {
  Container,
  Img,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Btn,
} from './styles';

// JSX

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const navegate = useNavigate()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser]);
    
    navegate('/usuarios')
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

      </ContainerItens>
    </Container>
  )
}

export default App