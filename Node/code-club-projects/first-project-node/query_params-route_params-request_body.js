const express = require ('express')
const port = 3000
const app = express()
app.use(express.json())


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

/*
 
// Query params

app.get('/users', (request, response) => {
    
    // const name = request.query.nome
    // const age = request.query.age   
    const { name, age } = request.query


    return response.json({name, age})
})


 */



/*

// Route Params

app.get('/users/:id', (request, response) => {
    const { id } = request.params
    console.log(id)

    return response.json({id})
})

*/

// Request Body

app.get('/users', (request, response) => {
    
    const { name, age } = request.body

    return response.json({name, age})
})




app.listen(port, () => {
    console.log (`🚀 sever started on port ${port}`)
})