const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(timestamp, hash, previousHash, data) {
		this.timestamp = timestamp;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
	}

	static createGenesisBlock() {
		const currentTime = Date.now();
		return new this(currentTime, 'f1r57-h45h', null, []);
	}

	static mineBlock(lastBlock, data) {
	    const timestamp = Date.now();
	    const lastHash = lastBlock.hash;

	    return new this(timestamp, hash, lastHash, data);
	}

	generateHash(timestamp, lastHash, data) {
		SHA256(`${timestamp}${lastHash}${data}`).toString();
	}
}

module.exports = Block;