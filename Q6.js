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
    const {
        name,
        address: { street },
      } = person;
      return { name, street };
    }
    

console.log(data(person))