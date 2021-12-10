const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({


    title: {
        type: String,
        required: true
    },
    body:{ 
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate:{
        type: Date,
        required: true
    }
});

module.exports=mongoose.model('todoModel',todoSchema);
