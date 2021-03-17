const Client = require('../Models/Client')
let { ObjectID } = require('mongodb')

let page1 = require('../assets/page1')
let page2 = require('../assets/page2')
let page3 = require('../assets/page3')
let page4 = require('../assets/page4')
let page5 = require('../assets/page5')
let page6 = require('../assets/page6')
let page7 = require('../assets/page7')
let page8 = require('../assets/page8')
let page9 = require('../assets/page9')
let page10 = require('../assets/page10')
let page11 = require('../assets/page11')
let page12 = require('../assets/page12')
let page13 = require('../assets/page13')
let page14 = require('../assets/page14')
let page15 = require('../assets/page15')
let page16 = require('../assets/page16')
let page17_18 = require('../assets/page17_18')
let page19 = require('../assets/page19')
let page20 = require('../assets/page20')

module.exports = (req, res) => {
  let id = req.params.id
  let info = {}
  req.body.forEach(x => (info[x.name] = x.value))
  let data = {
    Bureaux_d_imposition: info['0d1'],
    Bureaux_d_imposition_adress: info['0d2'],
    ...page1(info),
    ...page2(info),
    ...page3(info),
    ...page4(info),
    ...page5(info),
    ...page6(info),
    ...page7(info),
    ...page8(info),
    ...page9(info),
    ...page10(info),
    ...page11(info),
    ...page12(info),
    ...page13(info),
    ...page14(info),
    ...page15(info),
    ...page16(info),
    ...page17_18(info),
    ...page19(info),
    ...page20(info),
    year: 2019
  }
  Client.findOneAndUpdate(
    { _id: ObjectID(id) },
    data,
    { upsert: true },
    (err, result) => {
      if (err) res.send(err)
      else res.send(result)
    }
  )
}
