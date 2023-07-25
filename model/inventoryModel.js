const mongoose =require('mongoose');

const inventorySchema=new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'Please provide the Inventory Type'],
        enum:['in','out']
    },

    bloodGroup:{
        type: String,
        required:[true,'blood group is required'],
        enum:['O+','O-','AB+','AB-','A+','A-','B+','B-']
    },

    quantity:{
        type:Number,
        require:[true,'blood quantity is required']
    },

    email:{
        type:String,
        required:[true,'donar email is required']
    },

    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'user/organisation is required']
    },

    hospital:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : function(){
            return this.inventoryType ==="out";
        }
    },

    donar : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'users',
        required : function(){
            return this.inventoryType ==="in";
        },
    },
},

{ timestamps : true }

);

module.exports = mongoose.model('Inventory',inventorySchema);