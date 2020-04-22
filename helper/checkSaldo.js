function checkSaldo (saldo, donate) {
    if(saldo >= donate) {
        return donate
    }
    return false
}
module.exports = checkSaldo