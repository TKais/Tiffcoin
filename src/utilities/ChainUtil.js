const EC = require('elliptic').ec;
const ecInstance = new EC('secp256k1');

class ChainUtil {
	static generatePair() {
		return ecInstance.genKeyPair();
	}
}