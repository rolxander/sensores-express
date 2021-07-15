const moongose = require('mongoose');

const sensorSchema = moongose.Schema({
    sensor_name:{
        type:String,
        required:true
    },
    ubication:{
        type:String,
        required:true
    },
    measure:{
        type:Number,
        required:true
    },
    units:{
        type:String,
        required:true
    },
    inside_the_house:{
        type:String,
        required:false
    }  

})

const Sensor = module.exports = moongose.model('sensor',sensorSchema)

module.exports.get = (callback,limit)=>{
    Sensor.find(callback).limit(limit)
}   