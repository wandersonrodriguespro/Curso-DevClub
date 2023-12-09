const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const mapNewPrice = document.querySelector('.new-price')
const sumAll = document.querySelector('.sum-all')
const filter = document.querySelector('.filter')

function formatCurrency (value){
    const newValue = value.toLocaleString('pt-br', {
        style:'currency',
        currency: 'BRL',
    })

    return newValue
}

//ForEach

function showAll (productsArray){
    
    let myLi = ''

    productsArray.forEach(product => {

        myLi += `
        <li>
            <img src=${product.src}>
            <div class="name-price">
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
            </div>
        </li>
        `
        list.innerHTML = myLi
    })
}


// Map

function mapAllPrice () {
    
    const newPrice = menuOptions.map ( product => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrice)

}

// Reduce

function sumAllitems () {
    const totalValue = menuOptions.reduce ((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor dos itens é de R$ ${formatCurrency(totalValue)}</p>
    </li>
    `
}

// Filter

function filterAll () {

    const filterProduct = menuOptions.filter ( product => product.vegan == true)
    
    showAll(filterProduct)
} 



buttonShowAll.addEventListener('click', () => showAll(menuOptions))
mapNewPrice.addEventListener('click', mapAllPrice)
sumAll.addEventListener('click', sumAllitems)
filter.addEventListener('click', filterAll)