const Sensor = require('./sensorModel')
exports.get_sensores = (req,res)=>{
    Sensor.get((err,sensors)=>{
        if(err){
            res.json({
                state:"error, we're sorry",
                message:err
            })
        }
        else{
            res.json({
                state:'success',
                menssage:'list of saved sensors',
                data:sensors
            })
        }      
    })    
}
exports.post_sensores = (req,res)=>{
 let sensor = new Sensor();
 sensor.sensor_name = req.body.sensor_name
 sensor.ubication = req.body.sensor_name
 sensor.measure = req.body.measure
 sensor.units = req.body.units
 sensor.inside_the_house=req.body.inside_the_house?req.body.inside_the_house:false
 sensor.save((err)=>{
    if(err){
        res.json(err);
    }else{
        res.json({
            'message':'successfully saved',
            data:sensor
        })
    }
 })
}
exports.put_sensores = (req,res)=>{
    Sensor.findById(req.params.sensor_id,(err,sensor)=>{
        if(err){
            res.json(err)
        }else{
            sensor.sensor_name = req.body.sensor_name
            sensor.ubication = req.body.sensor_name
            sensor.measure = req.body.measure
            sensor.units = req.body.units
            if(req.body.inside_the_house!=null)
                sensor.inside_the_house=req.body.inside_the_house

        }
        sensor.save((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json({
                    'message':'successfully saved',
                    data:sensor
                })
            }
         })     
    })
}
exports.delete_sensores = (req,res)=>{
    Sensor.deleteOne({
        _id: req.params.sensor_id},
        (err,exito)=>{
            if(err)
                res.json(err)
            else
                res.json({
                    'message':'successfully deleted'
                })

    })
}

exports.all_sensores = (req,res)=>{
    res.send('all sensors')
}