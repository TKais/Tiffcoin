const Blockchain = require('../src/blockchain');
const Block = require('../src/block');

describe('Blockchain', () => {
	let newBlockchain;

	beforeEach(() => {
		newBlockchain = new Blockchain();
	});

	it('starts with genesis block', () => {
		expect(newBlockchain.chain[0].hash).toEqual('f1r57-h45h');
	});

	it('adds a new block', () => {
		const data = 'example';
		newBlockchain.addBlock(data);
		expect(newBlockchain.chain[newBlockchain.chain.length - 1].data).toEqual(data);
	});
})