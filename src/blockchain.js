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

	chainIsValid(chain) {
		if(JSON.stringify(chain[0]) !== JSON.stringify(Block.createGenesisBlock())) {
			return false;
		}

		for(let i = 1; i < chain.length; i++) {
			const block = chain[i];
			const lastBlock = chain[i-1];

			if(block.previousHash !== lastBlock.hash || 
				block.hash !== Block.blockHash(block)) {
				return false;
			}
		}

		return true;
	}
}

module.exports = Blockchain;