const ChainUtil = require('../utilities/ChainUtil');

class Wallet {
	constructor() {
		this.balance = 0;
		this.pair = ChainUtil.generatePair();
		this.publicKey = this.pair.getPublic().encode('hex');
	}
}

module.exports = Wallet;