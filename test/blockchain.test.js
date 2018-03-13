const Blockchain = require('../src/blockchain');
const Block = require('../src/block');

describe('Blockchain', () => {
	let firstBlockchain;
	let secondBlockchain;

	beforeEach(() => {
		firstBlockchain = new Blockchain();
		secondBlockchain = new Blockchain();
	});

	it('starts with genesis block', () => {
		expect(firstBlockchain.chain[0].hash).toEqual('f1r57-h45h');
	});

	it('adds a new block', () => {
		const data = 'example';
		firstBlockchain.addBlock(data);
		expect(firstBlockchain.chain[firstBlockchain.chain.length - 1].data).toEqual(data);
	});

	it('validates a valid chain', () => {
		secondBlockchain.addBlock('foo');

		expect(firstBlockchain.chainIsValid(secondBlockchain.chain)).toBe(true);
	});
})