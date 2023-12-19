const express = require("express")
const uuid = require('uuid')
const app = express()
app.use(express.json())
const port = 3000

const orders = []

const checkOrderId = (request, response, next) => {
    const { id } = request.params
    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "Order not found" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

const checkMethod = (request, response, next) => {

    const method = request.method
    const url = request.url

    console.log(`- [${method}] - URL => ${url}`)

    next()
}


app.use(checkMethod)


app.get('/orders/list', (request, response) => {

    return response.json(orders)
})


app.post('/orders/create', (request, response) => {

    const status = "Em preparação"
    const { order, clientName, price } = request.body
    const pedido = { id: uuid.v4(), order, clientName, price, status }

    orders.push(pedido)

    return response.status(201).json(pedido)
})

app.put('/orders/edit/:id', checkOrderId, (request, response) => {
    const { order, clientName, price, status } = request.body

    const index = request.orderIndex
    const id = request.orderId

    const updateOrder = { id, order, clientName, price, status }

    orders[index] = updateOrder

    return response.json(updateOrder)
})

app.delete('/orders/delete/:id', checkOrderId, (request, response) => {
    const index = request.orderIndex

    orders.splice(index, 1)
    return response.status(204).json()
})


app.get('/orders/filter/:id', checkOrderId, (request, response) => {

    const index = request.orderIndex
    const viewOrder = orders[index]

    return response.json(viewOrder)
})

app.patch('/orders/edit-status/:id', checkOrderId, (request, response) => {

    const id = request.orderId
    const index = request.orderIndex
    const status = "pronto"

    const updateUser = orders[index]

    updateUser.status = status

    return response.json(updateUser)
})


app.listen(port, () => {
    console.log(`🚀 sever started on port ${port}`)
})