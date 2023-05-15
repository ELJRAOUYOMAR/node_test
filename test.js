// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
//   res.end()
// }).listen(8080);

// // const express = require('express')


// // const app=express()

// // app.listen(3000,()=>{
// //     console.log('server work')
// //     '<h1>server work</h1>'
// // })


//display data in the console

// const axios = require('axios');
// const fs = require('fs');
// const http = require('http');

// const channelId = '1144189';

// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': 'FlespiToken BiOuBuz0VEDFH2QcgHT9zARWPDTxDsJ5ylpYFNOpfhSM9wOd3xctYUdDlUZPbwIz',
// };

// const getMessages = async () => {
//   try {
//     const response = await axios.get(`https://flespi.io/gw/channels/${channelId}/messages`, { headers });
//     if (response.status === 200) {
//       const data = response.data;
//       // Write the data to a JSON file
//       fs.writeFileSync('./messages.json', JSON.stringify(data));
//       // Log the data to the console
//       console.log(data);
//     } else {
//       console.error('Failed to retrieve messages');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// getMessages();
