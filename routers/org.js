let router = require('express').Router()
let OrgController = require('../controllers/org')

router.get('/', OrgController.show)

module.exports = router