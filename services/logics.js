// import db.js

const db = require('../services/db')

//logic for get all employees from the database

const getAllEmployees=()=>{
    return db.employee.find().then(

(result)=>{  //result-> all employees deatils
    if(result){
return {// send to frontend

    statusCode : 200,
    employees:result // employee details array
}

    }
    else {
        return{ //send to frontend
            statusCode:404,
            message:"Employee not found"

        }
    }
}

    )
}

//logic for add an employee to the database  
const addEmployee=(id,name,age,designation,salary)=>{

return db.employee.findOne({id}).then((result)=>{
//if id is in the db

if(result){

return{

    statusCode:404,
    message:"Employee already exist"
}

}
else{
//if id is not present in the db, to save all the data in db
const newEmployee=new db.employee({id,name,age,designation,salary})

newEmployee.save()
return{
    statusCode:200,
    message:"Employee added successfully"
}

}


})


}

//logic to delete an employee from the database

const deleteEmployee =(id)=>{

    return db.employee.deleteOne({id}).then((result)=>{

return{
    statusCode:200,
    message:"Employee deleted successfully"
}

    })
    .catch((error)=>{

return{
statusCode:401,
message:"Can't find Id"

}


    })

}

//logic for get an employee

const getAnEmployee=(id)=>{

    return db.employee.findOne({id}).then(

        (result)=>{  //result-> all employees deatils
            if(result){
        return {// send to frontend
        
            statusCode : 200,
            employees:result // employee details object
        }
        
            }
            else {
                return{ //send to frontend
                    statusCode:404,
                    message:"Employee not found"
        
                }
            }
        }
        
            )
    
}

//logic for update an employee details

const updateEmployee=(id,name,age,designation,salary)=>{ //updated details
    return db.employee.findOne({id}).then(

        (result)=>{  //result-> an employees deatils
            if(result){
///          assign updated employee details to the mongodb object
                result.id=id;
                result.name=name;
                result.age=age;
                result.designation=designation;
                result.salary=salary;
// to save the employee details to the mongodb

result.save();

        return {// send to frontend
        
            statusCode : 200,
           message:"Employee details updated successfully"
        }
        
            }
            else {
                return{ //send to frontend
                    statusCode:404,
                    message:"Employee not found"
        
                }
            }
        }
        
            )




}


module.exports ={

    getAllEmployees,addEmployee,deleteEmployee,getAnEmployee,updateEmployee
}