const express = require('express');
const app = express();


const WebSocket = require('ws');

const ws = new WebSocket('wss://ws.okx.com:8443/ws/v5/public');

ws.on('open', function open() {
  console.log('Connected to OKEx WebSocket API');
 

  // apikey = "01924c13-a39b-4f8b-a534-7c027d52cb63"
  // secretkey = "096C7B58104E933CB7A332451E729C0F"
  // IP = ""
  // API name = "test"
  // Permissions = "Read/Withdraw/Trade"









  const crypto = require('crypto');

  // Replace with your API key and secret
  const apiKey = 'YOUR_API_KEY';
  const apiSecret = 'YOUR_API_SECRET';
  
  // Generate a timestamp in seconds
  const timestamp = Math.floor(Date.now() / 1000);
  
  // Concatenate the timestamp, HTTP method, request path and request body
  const message = timestamp + 'GET' + '/users/self/verify' + '';
  
  // Generate a signature using HMAC-SHA256 algorithm
  const signature = crypto.createHmac('sha256', apiSecret)
      .update(message)
      .digest('hex');
  
  // Create the authentication object to send in the WebSocket request
  const auth = {
      op: 'login',
      args: [apiKey, timestamp, signature]
  };
  
  // Send the auth object as a JSON string in the WebSocket request
  websocket.send(JSON.stringify(auth));
  


// Subscribe to the BTC-USD spot ticker channel
ws.send(JSON.stringify({
  "channel": "tickers",
  "instId": [
    "BTC-USD",
    "ETH-USD",
    "LTC-USD"
  ]
 ,
  "op": "login",
  "args": [
    {
      "apiKey": "01924c13-a39b-4f8b-a534-7c027d52cb63",
      "passphrase": "Kishore@1jp",
      "timestamp": "1538054050",
      "sign": "096C7B58104E933CB7A332451E729C0F"
    },
    
  ]
}));
});

ws.on('message', function incoming(data) {
console.log("comming data is ..",data);
// Handle received data here

const buffer = Buffer.from(data);

 


// Convert the buffer to a string
const str = buffer.toString('utf8');

console.log("string data is ..",str); // Outputs: "Hello, world!"
});

ws.on('error', function error(err) {
console.error(err);
});


 

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
