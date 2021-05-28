require('dotenv').config();

const accountSid = process.env.TW_accountSid;
const authToken = process.env.TW_authToken;
const client = require('twilio')(accountSid, authToken);

export function send(data){
    let messageRes = ''
    data.forEach((row) => {
      messageRes += 'Center: ' + row.name + '\n' +
        'Address: ' + row.address + '\n' +
        'Slots:' + row.available_capacity + '\n' +
        'Fee Type: ' + row.fee_type + '\n' +
        'Age Limit: ' + row.min_age_limit + '\n' +
        'From: ' + row.from + '\n' +
        'To: ' + row.to + '\n\n';

    });
    

    // console.log(messageRes);
    client.messages
      .create({
        from: 'whatsapp:+14155238886',
        body: messageRes,
        to: 'whatsapp:+918693842216'
      })
      .then(message => console.log(message.sid)).catch(e=>console.log(e.message));
}