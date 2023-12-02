/*


        ForEach(item,inde, array)


*/


const user = [
    {name: 'Wanderson', age: '39', number: '(19) 94343-3434'},
    {name: 'Juliana', age: '35', number: '(19) 94343-3434'},
    {name: 'Lucas', age: '15', number: '(19) 94343-3434'},
    {name: 'Davi', age: '08', number: '(19) 94343-3434'},
    {name: 'Gabriel', age: '02', number: '(19) 94343-3434'},
]


user.forEach((element, index) => {
    console.log(`${index+1})- Nome: ${element.name}
    Idade: ${element.age} Anos
    Contato: ${element.number}`)
  
});