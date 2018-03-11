const Block = require('../src/block');

describe('Block', () => {
	let data, lastBlock, block;
	beforeEach(() => {
		data = 'example';
		lastBlock = Block.createGenesisBlock();
		block = Block.createMineBlock(lastBlock, data);
	});

	it('sets the `data` to match the input', () => {
		expect(block.data).toEqual(data);
	});

	it('sets the `lastHash` to match the hash of the last block', () => {
		expect(block.previousHash).toEqual(lastBlock.hash);
	});
});