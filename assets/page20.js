module.exports = function (info) {
    return {
        revenu_imposable: {
            total : {
                c1: info['20d2033'],
                c2: info['20d2034'],
                c3: info['20d2035'],
                c4: info['20d2036']
            },
            lieu: info['20d2001'],
            date: info['20d2002'],
            total_cal: info['20d2038']
        }
    }
}