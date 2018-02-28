class Block {
	constructor(timestamp, hash, previousHash, data) {
		this.timestamp = timestamp;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
	}
}

module.exports = Block;