const moongose = require('mongoose')

const eventSchema = moongose.Schema({
    event_name:{
        type:String,
        required: true
    },
    id_sensor:{
        type:String,
        required: true
    },
    fecha:{
        type:Date,
        required: true
    },
    measure:{
        type:Number,
        required: true
    },
    
})
const Event = module.exports = moongose.model('event',eventSchema)

module.exports.get=(callback,limit)=>{
    Event.find(callback).limit(limit)
}