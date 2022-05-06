const axios = require('axios')
const { reapitConnectSession } = require('../connect-session')
const { defaultHeaders } = require('../constants')

const propertiesController = async (req, res) => {
  try {
    const accessToken = await reapitConnectSession.connectAccessToken()

    const properties = await axios.get(
      `${process.env.PLATFORM_API_URL}/properties?embed=images&marketingMode=selling`,
      {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (properties) {
      res.render('properties', { properties: properties.data._embedded })
    } else {
      res.render('error', { message: 'No properties found for your search' })
    }
  } catch (err) {
    res.render('error', { message: err.message })
    console.error(err)
  }
}

module.exports = { propertiesController }
