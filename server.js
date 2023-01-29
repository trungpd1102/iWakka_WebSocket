import express from 'express';
import http from 'http';

import routes from './routes.js';
import createSocket from './socket.js';

const app = express();

app.use(routes);
const server = http.createServer(app);
createSocket(server);

server.listen(3000, () => {
	console.log('Listening on port 3000');
});
