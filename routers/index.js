let router = require('express').Router()
let routerDonatur = require('./donatur')
let routerOrg = require('./org')

router.get('/', (req, res) => {
    res.send('tis home')
})

router.use('/donatur', routerDonatur)
router.use('/org', routerOrg)

module.exports = router