const Block = require('../src/block');
const DIFFICULTY = require('../src/utilities/constants').DIFFICULTY;

describe('Block', () => {
	let data, lastBlock, block, blockDifficulty;
	beforeEach(() => {
		data = 'example';
		lastBlock = Block.createGenesisBlock();
		block = Block.createMineBlock(lastBlock, data);
		blockDifficulty = block.difficulty || DIFFICULTY;
	});

	it('expects the genesis block to exist', () => {
		expect(lastBlock).toBeDefined();
	});

	it('expects the mine block to exist', () => {
		expect(block).toBeDefined();
	});

	it('sets the `data` to match the input', () => {
		expect(block.data).toEqual(data);
	});

	it('sets the `lastHash` to match the hash of the last block', () => {
		expect(block.previousHash).toEqual(lastBlock.hash);
	});

	it('creates a hash that is identical to the difficulty setting', () => {
		expect(block.hash.substring(0, blockDifficulty)).toEqual('0'.repeat(blockDifficulty));
	});
});