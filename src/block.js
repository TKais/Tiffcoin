const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(timestamp, hash, previousHash, data, nonce) {
		this.timestamp = timestamp;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.nonce = nonce;
	}

	static createGenesisBlock() {
		const currentTime = Date.now();
		return new this(currentTime, 'f1r57-h45h', null, [], 0);
	}

	static createMineBlock(lastBlock, data) {
	    const timestamp = Date.now();
	    const lastHash = lastBlock.hash;
	    let nonce = 0;
	    let hash;

	    do {
	    	nonce++;
		    hash = Block.generateHash(timestamp, lastHash, data, nonce);
	    } while();

	    return new this(timestamp, hash, lastHash, data);
	}

	static generateHash(timestamp, lastHash, data) {
		SHA256(`${timestamp}${lastHash}${data}${nonce}`).toString();
	}

	static blockHash(block) {
		const { timestamp, previousHash, data, nonce } = block;
		return Block.generateHash(timestamp, previousHash, data, nonce);
	}
}

module.exports = Block;