var twilio = require('twilio');
var { accountSid, authToken } = require('./config')


var client = new twilio(accountSid, authToken)

const sendMessage = async ({ to, from, body })=>{
  try {
    const message = await client.messages.create({
      body,
      to,
      from
    })
    return message
  } catch (error) {
    console.error(error)
  }
}


module.exports = sendMessage