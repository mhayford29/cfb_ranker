var router = require('express').Router();
const { teams, userPolls } = require('./controller')

router
  .route('/team')
  .get(teams.get)

router
  .route('/userpolls')
  .get(userPolls.get)
  .post(userPolls.post)
  .patch(userPolls.patch)
  .delete(userPolls.delete)

module.exports = router;