const request = require('request')

const country = process.argv[2]

request(
  `https://restcountries.eu/rest/v2/name/${country}`,
  (error, response, body) => {
    if (error) {
      console.log(error)
      return
    }
    let obj
    try {
      obj = JSON.parse(body)
    } catch (error) {
      console.log(error)
    }
    for (let i = 0; i < obj.length; i++) {
      const countryDetail = obj[i]
      console.log('============')
      console.log(`國家：${countryDetail.capital}`)
      console.log(`首都：${countryDetail.name}`)
      console.log(`貨幣：${countryDetail.currencies[0].code}`)
      console.log(`國碼：${countryDetail.callingCodes}`)
    }
  }
)

// name capital currencies.code callingCodes
