const EC = require('elliptic').ec;
const ecInstance = new EC('secp256k1');
const uuidV1 = require('uuid/v1');

class ChainUtil {
	static generatePair() {
		return ecInstance.genKeyPair();
	}
}

module.exports = ChainUtil;