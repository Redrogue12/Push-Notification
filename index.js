const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BDguwIC0IAFT9AP4Ed46sVgMZyemF6Ka7HhrkVNJsT2MCmipQTB9PO9htLgS53JNUYb4nmF46Uc2r0MJ3dMXNKA';
const privateVapidKey = 'FKvjAFmF4S7G6N-7UiyNzco420HRG_sU-rGFOaR_Hhk';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({title: 'Push Test'});

  // Pass object into sendNotification
  webpush.sendNotification(subscription, payload,).catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));