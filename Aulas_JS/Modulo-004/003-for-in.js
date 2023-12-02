

/**
 * 
 * 
 * 
 * estrutura de repetição - Loop
 * 
 *      - for in
 * 
 * 
 */


const users = {name: 'Wanderson', age: '33', street: 'Rua dos Bobos'}

// console.log(users.name)
// console.log(users['name'])


for (const key in users) {
    console.log(`${key}: ${users[key]}`);
}