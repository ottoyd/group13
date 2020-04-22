function usedTicket (param1) {
    let fs = require('fs')
    let data = JSON.parse(fs.readFileSync('./json/ticket.json','utf8'))
    for(let i in data) {
        if (data[i].code == param1) {
            data.splice(i, 1)
        }
    }
    data = JSON.stringify(data, null, 2);
    fs.writeFileSync('./json/ticket.json', data, 'utf8');
}

module.exports = usedTicket