const amqplib = require('amqplib');

let channel, connection;

const initQueue = async () => {
  connection = await amqplib.connect('mqp://localhost');
  channel = await connection.createChannel();
  await channel.assertQueue('tasks');
  console.log('Queue initialized');
};

const sendToQueue = async (message) => {
  channel.sendToQueue('tasks', Buffer.from(JSON.stringify(message)));
  console.log('Message sent:', message);
};

const consumeQueue = async (workerCallback) => {
  await channel.consume('tasks', async (msg) => {
    const content = JSON.parse(msg.content.toString());
    console.log('Message received:', content);
    await workerCallback(content);
    channel.ack(msg);
  });
};

module.exports = { initQueue, sendToQueue, consumeQueue };
