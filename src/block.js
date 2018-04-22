const SHA256 = require('crypto-js/sha256');
const { DIFFICULTY, MINE_RATE } = require('./utilities/constants');

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
		return new this(currentTime, 'f1r57-h45h', null, [], 0, DIFFICULTY);
	}

	static createMineBlock(lastBlock, data) {
	    const lastHash = lastBlock.hash;
	    let timestamp;
	    let nonce = 0;
	    let { difficulty } = lastBlock;
	    let hash;

	    do {
	    	timestamp = Date.now();
	    	nonce++;
	    	difficulty = Block.adjustDifficulty(lastBlock, timestamp);
		    hash = Block.generateHash(timestamp, lastHash, data, nonce, difficulty);
	    } while(hash.substring(0,difficulty) !== '0'.repeat(difficulty));

	    return new this(timestamp, hash, lastHash, data, nonce, difficulty);
	}

	static generateHash(timestamp, lastHash, data, nonce, difficulty) {
		return SHA256(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
	}

	static blockHash(block) {
		const { timestamp, previousHash, data, nonce } = block;
		return Block.generateHash(timestamp, previousHash, data, nonce, difficulty);
	}

	static adjustDifficulty(lastBlock, currentTime) {
		let { difficulty } = lastBlock;

		difficulty = lastBlock.timestamp + MINE_RATE > currentTime ? difficulty + 1 : difficulty - 1;
		return difficulty;
	}
}

module.exports = Block;