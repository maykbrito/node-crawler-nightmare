const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true });
const url = 'https://www.instagram.com/accounts/login';

nightmare
  .goto(url)
  .wait('.-MzZI')
  .click('input[name=username]')
  .type('input[name=username]', 'accounthere')
  .click('input[name=password]')
  .type('input[name=password]', 'passwordhere')
  .click('button[type=submit].sqdOP')
  .wait('div.LWmhU _0aCwM')
  .click('div.LWmhU _0aCwM')
  .wait('input[type=text].XTCLo.x3qfX')
  .type('input[type=text].XTCLo.x3qfX', 'rocketseat')
  .evaluate(() => document.querySelector('body').innerHTML)
  .end()
  .then(response => {
    console.log(response);
  }).catch(err => {
    console.log(err);
  });