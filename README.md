# Payment Integration App

### Description
This project provides a Whatsapp notification service for COVID-19 Vaccine Slots availability.

### How to use ?
```
 - git clone https://github.com/GauravChinavle/vaccine-twilio-whatsapp.git
 - cd vaccine-twilio-whatsapp
 - npm install
 - nodemon bin/www
```

### Technologies used
- [Nodejs](https://nodejs.org/en/) - _JavaScript runtime built on Chrome's V8 JavaScript engine._
- [Express](https://expressjs.com/) - _Fast, unopinionated, minimalist web framework for Node.js_

### Modules used
- [Twilio](https://www.twilio.com/) -  _messaging service_
- [Joi](https://www.npmjs.com/package/joi) - _data validator as middleware_

### Pre-requisites
- Twilio credentials
    -_Above should be saved in .env_

### Flow chart
```mermaid
graph LR
A(User input) --> B((Joi))
B --> C(Fetches data from api setu)
C --success--> D(Twilio)
C --error--> F(No data found)
D --> E(Whatsapp notification)

```