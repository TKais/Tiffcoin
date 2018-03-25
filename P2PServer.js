const Websocket = require('ws');
const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2PServer {
	constructor(blockchain) {
		this.blockchain = blockchain;
		this.sockets = [];
	}

	connectSocket(socket) {
		this.sockets.push(socket);
		console.log('Added new, connected socket');
	}
}