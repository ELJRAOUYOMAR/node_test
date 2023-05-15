const axios = require('axios');
const fs = require('fs');
const mqtt = require('mqtt');
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
      fs.writeFileSync('./messages_mqtt.json', JSON.stringify(data));
    } else {
      console.error('Failed to retrieve messages');
    }
  } catch (error) {
    console.error(error);
  }
};
const client = mqtt.connect('mqtt://localhost');
client.on('connect', () => {
  console.log('MQTT client connected');
});
client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message}`);
});
client.subscribe('flespi/gw/channels/#');
getMessages();
