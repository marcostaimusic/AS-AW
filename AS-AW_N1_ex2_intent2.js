let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000 
}, {
    id: 3,
    salary: 2000
}];



const getEmpleado = async (id)=>{
    return new Promise ((resolve,reject)=>{
        let empleado = employees.find(x => x.id === id)
        if (empleado){
            resolve(empleado)
        } else {
            reject('error')
        }           
        })
}



const getSalario = async (obj)=>{
    return new Promise ((resolve, reject)=>{
        let id = obj.id
        let salario = salaries.find(x => x.id === id).salary
        if (salario){
            resolve(salario)
        } else {
            reject('error')
        }
    })
}


async function printData (id) {
    const employee = await getEmpleado(id) 
    const salary = await getSalario(employee)
    console.log(employee.name, salary);

}

printData(2);

