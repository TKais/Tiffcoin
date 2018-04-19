const SHA256 = require('crypto-js/sha256');
const DIFFICULTY = require('./utilities/constants').DIFFICULTY;

class Block {
	constructor(timestamp, hash, previousHash, data, nonce, difficulty) {
		this.timestamp = timestamp;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.nonce = nonce;
		this.difficulty = difficulty || DIFFICULTY;
	}

	static createGenesisBlock() {
		const currentTime = Date.now();
		return new this(currentTime, 'f1r57-h45h', null, [], 0, difficulty);
	}

	static createMineBlock(lastBlock, data) {
	    const lastHash = lastBlock.hash;
	    let timestamp;
	    let nonce = 0;
	    let hash;

	    do {
	    	timestamp = Date.now();
	    	nonce++;
		    hash = Block.generateHash(timestamp, lastHash, data, nonce);
	    } while(hash.substring(0,difficulty) !== '0'.repeat(difficulty));

	    return new this(timestamp, hash, lastHash, data, nonce);
	}

	static generateHash(timestamp, lastHash, data, nonce, difficulty) {
		SHA256(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
	}

	static blockHash(block) {
		const { timestamp, previousHash, data, nonce } = block;
		return Block.generateHash(timestamp, previousHash, data, nonce, difficulty);
	}
}

module.exports = Block;