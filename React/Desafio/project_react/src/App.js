import React from "react";
import imgHemburguer from "./assets/burger 1.png"
import trash from "./assets/trash.svg"
import { H1 } from "./components/Title/style";
import { ContainerItens } from "./components/ContainerItens/style"
import { Label } from "./components/Label/style";
import { Input } from "./components/Input/style";
import { Button } from "./components/Button/style";
import {
  Container,
  Img,
  Ul,
  Orders
} from './styles'


const App = () => {

  const orders = [
    { id: Math.random(), name: "Wanderson", order: "1 Coca-Cola, 1 X-Salada" },
    { id: Math.random(), name: "Juliana", order: "1 Fanta, 1 X-Tudo" }
  ]



  return (
    <Container>
      <Img alt="imagem de um hamburguer" src={imgHemburguer} />

      <H1>Faça seu pedido!</H1>

      <ContainerItens>
        <div>
          <Label>Pedido</Label>
          <Input></Input>
        </div>

        <div>
          <Label>Nome do Cliente</Label>
          <Input></Input>
        </div>

        <Button>Novo Pedido</Button>

        <Ul>
          {orders.map((order) => (
            <Orders>
             
                <div className="userOrder">
                  <p>{order.name}</p>
                  <p>{order.order}</p>
                </div>
                <button><img alt="Trash" src={trash} /></button>
            </Orders>
          ))}

        </Ul>
      </ContainerItens>
    </Container>
  );
}

export default App