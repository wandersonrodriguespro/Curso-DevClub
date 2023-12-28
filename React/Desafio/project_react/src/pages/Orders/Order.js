import React from "react";
import imgHemburguer from './assets/burger 1.png'
import { H1 } from "../../components/Title/style";
import { ContainerItens } from "../../components/ContainerItens/style"
import { Label } from "../../components/Label/style";
import { Input } from "../../components/Input/style";
import {
  Container,
  Img
} from '../../styles'
import { Button } from "../../components/Button/style";


const App = () => {
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

      </ContainerItens>

    </Container>
  );
}

export default App