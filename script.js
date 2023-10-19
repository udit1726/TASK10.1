const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();
const port = 5000;

// Use the CORS middleware to enable cross-origin requests
app.use(require('cors')());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/handle', (req, res) => {
  const email = req.body.email;

  const api_key = 'key-7519d268932efc4937026b20be44b8f8';
  const domain = 'sandbox97428c18f58e4084903e30bd13db8d76.mailgun.org';
  const mg = mailgun({ apiKey: api_key, domain: domain });

  const data = {
    from: 'Excited User <udit4854.be22@chitkara.edu.in>',
    to: email,
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!',
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email'); // Send an error response to the client.
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Email sent successfully'); // Send a success response to the client.
    }
  });
});

app.listen(5500, () => {
  console.log(`Server is running at port ${port}`);
});
