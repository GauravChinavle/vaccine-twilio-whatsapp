require('dotenv').config();
const accountSid = process.env.TW_accountSid;
const authToken = process.env.TW_authToken;
const client = require('twilio')(accountSid, authToken);

function send(data, pin, mobile) {
    let message = 'Vaccine Slots for Pincode ' + pin;
    console.log(pin,mobile);
    data.forEach(row => {
        message += '\n-------\nCenter: ' + row.name + '\n' +
            'Address: ' + row.address + '\n' +
            'Slots:' + row.available_capacity + '\n' +
            'Fee Type: ' + row.fee_type + '\n' +
            'Vaccine: ' + row.vaccine + '\n' +
            'Age Limit: ' + row.min_age_limit + '\n' +
            'From: ' + row.from + '\n' +
            'To: ' + row.to + '\n'

    });
    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: message,
            to: 'whatsapp:+91' + mobile
        })
        .then(message => console.log(message.sid)).catch(err => console.log(err.message));
}


module.exports = send;