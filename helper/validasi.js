function validasi (param1) {
    let fs = require('fs')
    let data = JSON.parse(fs.readFileSync('./json/ticket.json','utf8'))
    for(let i in data) {
        if (data[i].code == param1) {
            return data[i].nominal
        }
    }
    return false
}
module.exports = validasi