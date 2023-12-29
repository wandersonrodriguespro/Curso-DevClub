import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgEmbalagem from "../../assets/embalagem_ burger.png"
import trash from "../../assets/trash.svg"
import { H1 } from "../../components/Title/style";
import { ContainerItens } from "../../components/ContainerItens/style"
import { Button } from "../../components/Button/style";

import {
  Container,
  Img,
  Ul,
  Orders
} from './styles'


const Order = () => {

  const [orders, setOrders] = useState([]);
  const navegate = useNavigate()
  

  // FUNCTION SHOW GET

  useEffect(() => {
    async function fetchOrders(){
      
    const {data:newOrders } = await axios.get("http://localhost:3001/orders/list")
    setOrders(newOrders)
    }

    fetchOrders()
  }, [])


  // FUNCTION DELETE
  
  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/delete/${orderId}`)

    const newOrders = orders.filter( order => order.id !== orderId )
    setOrders(newOrders)
  }

  const backAddOrder = () => {navegate('/')}


  // RETORNO DO HTML

  return (
    <Container>
      <Img alt="imagem de um hamburguer" src={imgEmbalagem} />

      <H1>Pedidos</H1>

      <ContainerItens>

        <Ul>
          {orders.map((order) => (
            <Orders key={order.id}>
              <div className="userOrder">
                <p>{order.order}</p>
                <p>{order.clientName}</p>
              </div>
              <button onClick={() => deleteOrder(order.id)}><img alt="Trash" src={trash} /></button>
            </Orders>
          ))}

        </Ul>

        <Button onClick={backAddOrder} isBack={true}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Order