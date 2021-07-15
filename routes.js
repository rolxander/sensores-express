const {Router} = require('express')
const router = Router();
const controller = require('./controller')
router.route('/')
    .get(controller.all_sensores)
router.route('/sensors')
    .get(controller.get_sensores)
    .post(controller.post_sensores)
router.route('/sensors/:sensor_id')    
    .put(controller.put_sensores)
    .delete(controller.delete_sensores)
    

module.exports = router;