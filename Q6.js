const person = {
    name: 'Paresh',
    age:29,
    address:{
        street:'Nilapada',
        city:'Jajapur',
        state:'Odisha'
    }
}

function data(person){
        console.log({Name: person.name, Address: person.address.city})
}

data(person)