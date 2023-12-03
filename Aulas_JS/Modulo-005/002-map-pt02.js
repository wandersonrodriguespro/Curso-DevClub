
const list = [
    { name: 'Wanderson', vip: true },
    { name: 'Juliana', vip: true },
    { name: 'Lucas', vip: false },
    { name: 'Davi', vip: false },
    { name: 'Gabriel', vip: false },
    { name: 'Rodolfo', vip: true },
    { name: 'Julio', vip: true },
]


const newList = list.map (user => {
    const newUser = {
        name: user.name,
        Pulseira: user.vip ? 'black' : 'green'
    }

    return newUser
})

// console.log(newList)


const students = [
    { name: 'Wanderson',testGrade: 7},
    { name: 'Juliana',testGrade: 5},
    { name: 'Lucas',testGrade: 8},
    { name: 'Davi',testGrade: 9},
    { name: 'Gabriel',testGrade: 3},
    { name: 'Rodolfo',testGrade: 2},
    { name: 'Julio',testGrade: 10},
]



const newListStudents = students.map ( students => {
    
    // let studentNotas

    // if ( students.testGrade < 5 ) {
    //     studentNotas = 'Reprovado'
    // }else {
    //     studentNotas = 'Aprovado'
    // }

    return newStundets = {
        name: students.name,
        test: students.testGrade < 5 ? 'Reprovado' : 'Aprovado' /*studentNotas*/
    }

   
})

console.log(newListStudents);