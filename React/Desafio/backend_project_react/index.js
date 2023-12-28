const express = require('express')
const uuid = require('uuid')
const app = express()
const port = 3001
app.use(express.json())

const orders = []

const chechOrderId = (request, response, next) => {
    const { id } = request.params
    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Order not found" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

app.get('/orders/list', (request, response) => {
    return response.json(orders)
})

app.post('/orders/create', (request, response) => {
    const status = "Em Preparação"
    const { order, clientName } = request.body
    const pedido = { id: uuid.v4(), clientName, order, status }

    orders.push(pedido)

    return response.status(201).json(pedido)
})

app.delete('/orders/delete/:id', chechOrderId, (request, response) => {
    const index = request.orderIndex

    orders.splice(index, 1)
    return response.status(204).json()
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
