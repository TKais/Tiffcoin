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

	isValidChain(chain) {
		if((chain[0].hash !== Block.createGenesisBlock().hash) || (JSON.stringify(chain[0].data) !== JSON.stringify(Block.createGenesisBlock().data))) {
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

	replaceChain(replacementChain) {
		if(replacementChain.length <= this.chain) {
			throw new Error('Replacement chain must be longer than the current chain.');
			return;
		} else if(!this.isValidChain(replacementChain)) {
			throw new Error('Replacement chain is invalid.');
			return;
		}

		this.chain = replacementChain;
	}
}

module.exports = Blockchain;