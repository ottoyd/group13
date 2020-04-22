  let { Orgs, DonaturOrg, Donatur } = require('../models')

class ControllerOrg {
    static show (req, res) {
        Orgs.findAll()
        .then((data) => {
            console.log(data)
            res.render('orgs',{data})
        })
    }
}
module.exports = ControllerOrg