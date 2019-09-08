var router = require('express').Router();
const controller = require('./controller')

router
  .route('/team')
  .get(controller.get)

module.exports = router;