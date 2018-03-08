const Block = require('./block');

class Blockchain {
	constructor() {
		this.chain = [Block.createGenesisBlock()];
	}

	addBlock(data) {
		const lastBlock = this.chain[this.chain.length - 1];
		const block = Block.createMineBlock(lastBlock, data);

		this.chain.push(block);
		return block;
	}
}

module.exports = Blockchain;