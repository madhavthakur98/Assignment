const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userRoutes =require('./routes/userRoutes')
const PORT = 4000;
const { initQueue } = require('./controllers/queueHandler/queue');


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',userRoutes)


app.get('/',(req,res)=>{
    res.send("This is Your Home Page")
});




mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
    app.listen(PORT, ()=>{
        initQueue();
        console.log("Server is running")
    })
})
