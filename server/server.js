	
const express = require('express');
const Twitter = require('twit');
const app = express();
 
app.listen(3000, () => console.log('Server running'))
const api_client = new Twitter({
    consumer_key: 'Am7qBf4ZTUHAQoIpC5eYV9YP7',
    consumer_secret: 'pNtLM2u608jIlv1zixjQPuCdvVzIpSlR1MFz6l8oOqZCAQfLPD',
    access_token: '1493606938323689484-A4N7hqkrgrBcHi4ZyVCapGp981juCD',
    access_token_secret: 'xvXB36OknKwVmtBofz7Gzg1wjWx4WjOt9YL863N7w18CW'
    
  });
 
  app.use(require('cors')());
  app.use(require('body-parser').json());
  	
app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'elevated', count: 10 };
   
    api_client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});
app.get('/mentions_timeline', (req, res) => {
    const params = { tweet_mode: 'elevated', count: 10 };
   
    api_client
      .get(`statuses/mentions_timeline`, params)
      .then(timeline => {
       
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});