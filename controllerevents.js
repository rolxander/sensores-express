const Event = require('./eventsModel')
exports.get_events = (req,res)=>{
    Event.get((err,events)=>{
        if(err)
            res.json({
                state:"We're sorry",
                message:err
            })
        else
            res.json({
                state:'success',
                message:'list of saved event',
                data:events
            })
    })

}

exports.post_events = (req,res)=>{
    let event = new Event();
    event.event_name = req.body.event_name
    event.fecha = new Date().getTime();
    event.id_sensor = req.body.id_sensor
    event.measure = req.body.measure   
    event.save((err)=>{
        if(err)
            res.json(err)
        else
            res.json({
                'message':'successfully saved',
                data:event
            })
    })

}
