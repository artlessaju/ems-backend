// import express

const express = require('express')

// import cors

const cors = require('cors')

//import logics
const logic = require('./services/logics')

//create an application using express

const emsServer = express()

// using cors to connect frontend port

emsServer.use(cors({

    origin:'http://localhost:3000'
}))

//create a middleware for parsing json data

emsServer.use(express.json())

// define port number

emsServer.listen(8000,()=>{

    console.log("emsServer listening on the port 8000");
})

// API call for getAllEmployee details localhost:8000/get-all-employees

emsServer.get('/get-all-employee',(req,res)=>{
//logic-function - getAllEmployee()-
logic.getAllEmployees().then((response)=>{
    res.status(response.statusCode).json(response)
})

})

// / API call for add an employee details localhost:8000/add-employee

emsServer.post('/add-Employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
res.status(response.statusCode).json(response)

    })
})

//API call for delete employee details--
//localhost:8000/delete-employee

emsServer.delete('/delete-employee/:id',(req,res)=>{
logic.deleteEmployee(req.params.id).then((response)=>{
res.status(response.statusCode).json(response)

})

})


// API call for getaAnEmployee details localhost:8000/get-an-employees

emsServer.get('/get-an-employee/:id',(req,res)=>{
    //logic-function - getAnEmployee()-
    logic.getAnEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
    
    })

    // API call update an Employee details localhost:8000/update-an-employees

emsServer.post('/update-an-employee/:id',(req,res)=>{
    //logic-function - updateanEmployee()-
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
    
    })
    