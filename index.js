const express = require('express');
const Blockchain = require('./src/blockchain');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8000;

const app = express();
const chainInstance = new Blockchain();

app.use(bodyParser.json());

app.get('/blocks', (request, response) => {
	response.json(chainInstance.chain);
});

app.post('/mine', (request, response) => {
	const block = chainInstance.addBlock(request.body.data);
	response.redirect('/blocks');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});