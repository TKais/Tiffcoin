class Block {
	constructor(timestamp, hash, previousHash, data) {
		this.timestamp = timestamp;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
	}

	static createGenesisBlock() {
		var currentTime = new Date();
		return new this(currentTime, 'f1r57-h45h', null, []);
	}
}

module.exports = Block;