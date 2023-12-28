import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Avatar from '../../assets/avatar.svg'
import Trash from '../../assets/trash.svg'
import Arrow from '../../assets/arrow.svg'
import H1 from '../../components/title'
import ContainerItens from '../../components/containerItens';
import { Button } from '../../components/button/styles';

import {
  Container,
  Img,
  User
} from './styles';

// JSX

const Users = () => {
  const [users, setUsers] = useState([]);

  const navegate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  function goBackPage() {
    navegate('/')
  }


  return (
    <Container>
      <Img alt='logo-image' src={Avatar} />

      <ContainerItens isBlur={true}>

        <H1>Usuários</H1>

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

        <Button isBack={true} onClick={goBackPage}>
          <img alt='seta' src={Arrow}></img>
          Voltar
        </Button>

      </ContainerItens>
    </Container>
  )
}

export default Users