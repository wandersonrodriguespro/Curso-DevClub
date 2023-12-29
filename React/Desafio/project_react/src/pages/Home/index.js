import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgHamburguer from "../../assets/burger 1.png"
import { H1 } from "../../components/Title/style";
import { ContainerItens } from "../../components/ContainerItens/style"
import { Label } from "../../components/Label/style";
import { Input } from "../../components/Input/style";
import { Button } from "../../components/Button/style";

import {
  Container,
  Img,
} from './styles'


const App = () => {

  const [orders, setOrders] = useState([]);
  const inputName = useRef()
  const inputOrder = useRef()
  const navegate = useNavigate()

  // FUNCTION ADD USER
  
  async function addNewOrder() {
    const {data: newOrder} = await axios.post("http://localhost:3001/orders/create", {
      clientName: inputName.current.value,
      order: inputOrder.current.value
    })

    setOrders([...orders, newOrder]);

    navegate('/orders')
  }


  // RETURN HTML

  return (
    <Container>
      <Img alt="imagem de um hamburguer" src={imgHamburguer} />

      <H1>Faça seu pedido!</H1>

      <ContainerItens>

        <div className="containerInput">
          <Label>Nome do Cliente</Label>
          <Input ref={inputName} placeholder="Digite seu nome"></Input>
        </div>

        <div className="containerInput">
          <Label>Pedido</Label>
          <Input ref={inputOrder} placeholder="Digite seu pedido"></Input>
        </div>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>
  );
}

export default App