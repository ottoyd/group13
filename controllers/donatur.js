let kirimGmail = require('../MVP/gmail')
let validasi = require('../helper/validasi')
let usedTicket = require('../helper/usedTicket')
let checkSaldo = require('../helper/checkSaldo')
let { Orgs, DonaturOrg, Donatur } = require('../models')

class ControllerOrg {
    static show (req, res) {
        Donatur.findAll()
        .then((data) => {
            res.render('listTemp',{data})
        })
    }

    static gotoForm (req, res) {
        Donatur.findByPk(req.params.id)
        .then((donatur) => {
            DonaturOrg.findAll({
                include: [ Orgs, Donatur ]
            })
            .then((data) => {
                // console.log(data)
                res.render('donatur',{donatur, data})
            })
        })
    }

    static topup (req, res) {
        Donatur.findByPk(req.params.id)
        .then((donatur) => {
            kirimGmail(donatur, req.body.nominal)
            res.redirect(`/donatur/goto/${req.params.id}`)
        })
    }

    static claim (req, res) {
        console.log(req.body.topUp)
        Donatur.findByPk(req.params.id)
        .then((donatur) => {
            let valid = validasi(req.body.topUp)
            if(valid) {
                // console.log(valid)
                let temp = donatur.dataValues.saldo + valid
                Donatur.update({ saldo: temp }, {
                    where: {
                      id: req.params.id
                    }
                });
                usedTicket(req.body.topUp)
            }
            res.redirect(`/donatur/goto/${req.params.id}`)
        })
    }

    static donateForm (req, res) {
        Donatur.findByPk(req.params.id)
        .then((donatur) => {
            Orgs.findAll()
            .then((org) => {
                res.render('donate',{donatur, org})
            })
        })
    }

    static donate (req, res) {
        Donatur.findByPk(req.params.id)
        .then((donatur) => {
           let check = checkSaldo(donatur.dataValues.saldo, req.body.donate)
           if (check) {
               let temp = donatur.dataValues.saldo - req.body.donate
               Donatur.update({ saldo: temp }, {
                    where: {
                    id: req.params.id
                    }
               })
               Orgs.findByPk(req.params.org)
               .then((org) => {
                   let temp2 = req.body.donate*1 + org.jumlah_terkumpul
                   Orgs.update({ jumlah_terkumpul: temp2 }, {
                    where: {
                    id: req.params.org
                    }
               })
               })
           }
           res.redirect(`/donatur/donate/${req.params.id}`)
        })
    }
}

module.exports = ControllerOrg