const{Router} = require('express')
const controllerEvents = require('./controllerevents')
const router= Router();

router.route('/events')
    .get(controllerEvents.get_events)
    .post(controllerEvents.post_events)
router.route('/events/:id')
    .get(controllerEvents.get_code)
module.exports = router;