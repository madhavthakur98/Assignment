const User  = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.loginHandler = async (req,res)=>{
    let {email,password} = req.body;
    try{
        const person = await User.findOne({email});
        if(!person){
            return res.status(401).send("User is not Registered! Plase SignUp First")
        }
        else{
            bcrypt.compare(password, person.password, function(err, result) {
                if(result){
                    return res.status(201).send(`welcome !! ${person.name}`)
                }
                else{
                    return  res.status(400).send("Password is incorrect")
                }
              });
            
        }

    }
    catch(error){
        res.status(400).send(error.message)
    }

}

exports.signupHandler = async(req,res)=>{
    let {name,email,password} = req.body;
    
    try{
        const person = await User.findOne({email});
        if(person){   
            res.status(401).send(`this emsil is already registered ${person.email}`);
        }
        else{
            bcrypt.hash(password, saltRounds, async function(err, hash) {
                const user = new User({name,email,password: hash})
                await user.save();
                res.status(201).send(`HI! ${name} your email is ${email} registerd you can proceed to login`);
            });
            
        }

        
    }
    catch (error){
        res.status(400).send(error.message);
    }
    
   
}


