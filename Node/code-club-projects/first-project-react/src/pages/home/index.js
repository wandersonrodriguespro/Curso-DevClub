import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';

import H1 from '../../components/title'
import ContainerItens from '../../components/containerItens';
import { Button } from '../../components/button/styles';

import {
  Container,
  Img,
  InputLabel,
  Input,
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

        <H1 >Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt='seta' src={Arrow}></img>
        </Button>

      </ContainerItens>
    </Container>
  )
}

export default App