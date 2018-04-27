const Blockchain = require('../src/blockchain');
const Block = require('../src/block');

describe('Blockchain', () => {
	let firstBlockchain;
	let secondBlockchain;

	beforeEach(() => {
		firstBlockchain = new Blockchain();
		secondBlockchain = new Blockchain();
	});

	it('expects the first blockchain instance to exist', () => {
		expect(firstBlockchain).toBeDefined();
	});

	it('expects the second blockchain instance to exist', () => {
		expect(secondBlockchain).toBeDefined();
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
		secondBlockchain.addBlock('example');

		expect(firstBlockchain.isValidChain(secondBlockchain.chain)).toBe(true);
	});

	it('invalidates a chain with an invalid genesis block', () => {
		secondBlockchain.chain[0].data = 'invalid';

		expect(firstBlockchain.isValidChain(secondBlockchain.chain)).toBe(false);
	});

	it('replaces the chain with a valid chain', () => {
		secondBlockchain.addBlock('testing');
		firstBlockchain.replaceChain(secondBlockchain.chain);

		expect(firstBlockchain.chain).toEqual(secondBlockchain.chain);
	});
})