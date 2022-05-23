const express = require('express')
const mongoose = require("mongoose")
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json())
const { body, validationResult } = require('express-validator');
const User = require('./models/UserSchema');
const Comment = require('./models/CommentSchema');
const admin =require("./models/AdminSchema")
const ConnectToDb = require("./db");
const port = 3001;
app.post('/', [
    body('email', 'Enter a valid email').isEmail(),
    body('number', 'Number must 10 digit').isLength({ min: 10 }),
    body('name', 'Name cannot be blank')], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = errors.array()
            return res.status(400).json(error);
        }
        success: false
        const { name, email, number } = req.body;
        let userEmail = await User.findOne({ email });
        let names = await User.findOne({ name });
        let numbers = await User.findOne({ number });
        console.log(userEmail, names)
        success = false
        if (userEmail || names || numbers) {
            console.log("hhhh" + userEmail + " " + names + " " + numbers)
            
           
             if (numbers) {
                return res.status(400).json({ msg: "user number credential" })
            } else if (names) {
                return res.status(400).json({ msg: "user name credential" })
            } else if (userEmail) {
                return res.status(400).json({ msg: "user email credential" })
            }}
            try {
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    number: req.body.number,
                });
                await user.save()
                success = true
                let time=100000;
                res.json({ success, user, time})
            } catch (error) {
                console.error(error);
                res.status(500).send("internal server error");}

        });
app.post('/admin',async (req, res) => {
    const { email,name ,number} = req.body;
        let userEmail = await User.findOne({ email });
        let usernumber = await User.findOne({ number });
        let username = await User.findOne({ name });
        console.log(userEmail)
        if(userEmail&&usernumber&&username){
        if (userEmail.email=== "admin@admin.com" && userEmail.name === "admin" && userEmail.number === "0000000000") {
            let user = await User.find()
            success:true
            return res.status(200).json({success:true, user })}
        }
    try {
                    let user=new admin({
                    name: req.body.name,
                    email: req.body.email,
                    number: req.body.number,
                })
                await user.save()
                success:true
                res.status(200).json({success,user})
        }
        catch (error) {
        res.status(200).send({error:"You are not admin"})

    }
})
app.post('/Home', async(req, res) => {
  console.log(req.body)
  console.log(Comment)
  const {userid,comment}=req.body
    try {
        let data=await Comment.findOne({userid})
        console.log(data)
        if(data){
          return  res.status(400).json({comment:"data alredy save"})
        }
        let desc=new Comment({
            comment:comment,
            userid:userid
        })
        await desc.save()
        console.log(desc)
        res.json({desc})
            

    } catch (error) {
        console.log(error)
       res.status(500).send("internal serverhh error")
    }
})
app.listen(port, () => {
    console.log("I am listening on port:" + port)
})