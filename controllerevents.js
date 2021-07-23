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

exports.post_events = async (req,res)=>{
    let event = new Event();
    event.event_name = req.body.event_name
    event.fecha = new Date().getTime();
    event.id_sensor = req.body.id_sensor
    if(req.body.event_name === "ensendido de alarma"){
        event.measure = req.body.measure || 0
        event.nombre = req.body.nombre
    }
    if(req.body.event_name === "apagado de alarma"){
        console.log("estoy dentro")
      //  console.log(`El id del evento a comprar es ${req.body.id_ultimate_event}`)   
       let fecha = await get_fecha(req.body.id_ultimate_event,event);
        console.log(fecha)
        event.duration_of_event = fecha/1000;

        //console.log(event)
    }
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
exports.get_code = (req,res)=>
{
    Event.find({'event_name':'ensendido de alarma'},(err,sensor)=>{
        if(err){
            res.json(err)
        }else{
           res.send('recived')
        }
        
    })
}

const get_fecha = (id_event) =>{
  return  new Promise((resolve,reyect)=>{
        Event.findById(id_event, (err,event)=>{
            if(err){
                res.json(err)
            }else{
                let duration  =  new Date().getTime()- new Date(event.fecha) ;
                //evento.duration_of_event =  duration;
                //console.log(duration)
                resolve(duration)
            }
            
         
        })
    });
  /*  Event.findById(id_event, (err,event)=>{
        if(err){
            res.json(err)
        }else{
            let duration  =  new Date().getTime()- new Date(event.fecha) ;
            evento.duration_of_event =  duration;
            console.log(evento)
        }
        
     
    })*/
    
}