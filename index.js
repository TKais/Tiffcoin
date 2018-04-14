const express = require('express');
const Blockchain = require('./src/blockchain');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8000;
const P2PServer = require('./P2PServer');

const app = express();
const chainInstance = new Blockchain();
const pServer = new P2PServer(chainInstance);

app.use(bodyParser.json());

app.get('/blocks', (request, response) => {
	response.json(chainInstance.chain);
});

app.post('/mine', (request, response) => {
	const block = chainInstance.addBlock(request.body.data);
	pServer.syncChains();
	response.redirect('/blocks');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});