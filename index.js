const connection = require('./connection');
const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json())

app.get('/employees', (req,res)=>{
    connection.query('SELECT * FROM employee', (err,rows)=>{
        if (err) {
            console.log('err')
        }
        else{
            // console.log(rows)
            res.send(rows)
        }
    })
})

app.get('/employees/:id', (req,res)=>{
    connection.query('SELECT * FROM employee WHERE id=?',[req.params.id], (err,rows)=>{
        if (err) {
            console.log('err')
        }
        else{
            // console.log(rows)
            res.send(rows)
        }
    })
})

app.delete('/employees/:id', (req,res)=>{
    connection.query('DELETE * FROM employee WHERE id=?',[req.params.id], (err,rows)=>{
        if (err) {
            console.log('err')
        }
        else{
            // console.log(rows)
            res.send(rows)
        }
    })
})

app.listen(3000, ()=>console.log('Express server is running on port 3000'))