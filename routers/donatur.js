let router = require('express').Router()
let DonaturController = require('../controllers/donatur')

router.get('/', DonaturController.show)
router.get('/goto/:id', DonaturController.gotoForm)
router.post('/topup/:id', DonaturController.topup)
router.post('/claim/:id', DonaturController.claim)
router.get('/donate/:id', DonaturController.donateForm)
router.post('/donate/:id/org/:org', DonaturController.donate)

module.exports = router