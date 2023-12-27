/**
 *      - Query params  => meusite.com/usres?nome=wanderson&age=28 // FILTROS
 *      - Route params  => /users/2      //BUSCA, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
 *      - Request Body  => {"name": "Wanderson", "Age":}
 * 
 *      - GET           => Buscar informações no back-end
 *      - POST          => Criar informações no back-end
 *      - PUT / PATCH   => Alterar/Atualizar informações no back-end
 *      - DELETE        => Deletar informações no back-end
 * 
 *      -Middleware     => INTERCEPTADOR => Tem o poder de parar ou alterar dados de requisição
 * 
 *
 * 
**/

const express = require('express');
const uuid = require('uuid');
const cors = require('cors')

const port = 3001;
const app = express();
app.use(express.json());
app.use (cors())

const users = []

const checkUserId = (request, response, next) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "User not found" })
    }

    request.userIndex = index
    request.userId = id

    next()
}

app.get('/users', (request, response) => {
    return response.json(users)
})


app.post('/users', (request, response) => {

    try {
        const { name, age } = request.body

        if (age < 18) throw new Error('Only allow users overs over 18 years old')

        const user = { id: uuid.v4(), name, age }

        users.push(user)

        return response.status(201).json(user)
    } catch (err) {
        return response.status(500).json({ error: err.message });
        
    } finally {
        console.log('terminou de adicionar')
    } // FInally é opcional
})



app.put('/users/:id', checkUserId, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId

    const updateUser = { id, name, age }

    users[index] = updateUser

    return response.json(updateUser)
})


app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)
    return response.status(204).json()
})




app.listen(port, () => {
    console.log(`🚀 sever started on port ${port}`)
})