const mongoose = require('mongoose')

const newUserSchema = new mongoose.Schema( 
    {
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    
    Password:{
        type:String,
        required: true,
        
    },
    // tokens:[
    //     {
    //         token:{
    //             type:String,
    //     required: true, 
    //         }
    //     }
    // ]

})

// AddUsers.methods.getAuthToken=async function(){
//     try{
//         const token= jwt.sign({id:this._id},'screte')
//         this.tokens=this.tokens.concat({token:token})
//         await this.save()
//         return token
//     }catch(err){
//         console.log(err)
//     }
// }





const User = mongoose.model('AddUser', newUserSchema)

module.exports = User