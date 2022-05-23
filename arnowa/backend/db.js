const mongoose=require("mongoose")

const ConnectToDb=()=>{
    mongoose.connect('mongodb://localhost:27017/Arnowauser').then(()=>console.log("connection to db succesfully")).catch(()=>console.log("connection not available"))

}
module.export = ConnectToDb()