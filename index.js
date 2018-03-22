const express = require('express');
const Blockchain = require('./src/blockchain');
const PORT = process.env.port || 8000;

const app = express();
const chainInstance = new Blockchain();

app.get('/blocks', (request, response) => {
	response.json(chainInstance.chain);
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});