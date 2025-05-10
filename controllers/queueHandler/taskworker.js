const { consumeQueue } = require('./queue');

const processTask = async (task) => {
  console.log('Processing task:', task);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Task processed:', task);
};

consumeQueue(processTask);