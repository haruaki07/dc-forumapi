require('dotenv').config();
const createServer = require('./Infrastructures/http/createServer');
const container = require('./Infrastructures/container');

(async () => {
  const server = await createServer(container);
  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server start at ${server.info.uri}`);
})();
