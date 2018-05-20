const EC = require('elliptic').ec;
const ecInstance = new EC('secp256k1');
const uuidv1 = require('uuid/v1');

class ChainUtil {
	static generatePair() {
		return ecInstance.genKeyPair();
	}

	static id() {
		return uuidv1();
	}
}

module.exports = ChainUtil;