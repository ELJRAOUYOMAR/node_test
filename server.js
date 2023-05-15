//GET request to the Flespi API to retrieve the list of messages.
const axios = require('axios');
//the fs library is being used to write the data from the API
// response to a file called messages.json.
const fs = require('fs');
//the http library is being used to create an HTTP server that listens 
//for incoming requests on a specified port and responds with a simple 
//"Hello World" message.
const http = require('http');

const channelId = '1144189';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'FlespiToken BiOuBuz0VEDFH2QcgHT9zARWPDTxDsJ5ylpYFNOpfhSM9wOd3xctYUdDlUZPbwIz',
};

const getMessages = async () => {
  try {
    const response = await axios.get(`https://flespi.io/gw/channels/${channelId}/messages`, { headers });
    if (response.status === 200) {
      const data = response.data;
      // Write the data to a JSON file
      fs.writeFileSync('./messages.json', JSON.stringify(data));
    } else {
      console.error('Failed to retrieve messages');
    }
  } catch (error) {
    console.error(error);
  }
}; 

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

getMessages();




/*
The async keyword is used to declare a function as asynchronous, 
which means that it can contain one or more await expressions. 
When an await expression is encountered, the JavaScript engine 
will pause the execution of the async function and wait for 
the promise to be resolved before continuing.
 This allows you to write code that looks like it is synchronous, 
 but is actually asynchronous under the hood.

*/