function kirimGmail (target, nominal) {
    let fs = require('fs')
    let temp
    let pesan = ''
    if(!nominal) {
        pesan = `selamat bergabung ${target.nama_donatur}`
        
    } else {
        let arr = []
        for(let i = 0; i < 5; i ++) {
            let rng = Math.floor(Math.random()*9)
            arr.push(rng)
        }
        temp = arr
        pesan = `Terima kasih ${target.nama_donatur} Kode Voucer anda ${arr.join('')}`
    }
    var nodemailer = require('nodemailer')

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'pairprojectgroup5@gmail.com',
               pass: 'pairproject5!'
           }
       });
    const mailOptions = {
        from: 'pairprojectgroup5@gmail.com', // sender address
        to: target.email, // list of receivers
        subject: 'Subject of your email', // Subject line
        html: pesan// plain text body
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
          else{
            let newVoc = {
                "nominal": +nominal,
                "code":temp.join('')
            }
            let data = JSON.parse(fs.readFileSync('./json/ticket.json','utf8'))
            data.push(newVoc)
            data = JSON.stringify(data, null, 2);
            fs.writeFileSync('./json/ticket.json', data, 'utf8');
          }
     });
}
// console.log(kirimGmail('helo', 10000))
module.exports = kirimGmail