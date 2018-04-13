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

		this.handleMessages(socket);
		this.sendChain(socket);
	}

	connectToPeers() {
		peers.forEach( (peer) => {
			const socket = new Websocket(peer);

			socket.on('open', () => {
				this.connectSocket(socket);
			});
		});
	}

	handleMessages(socket) {
		socket.on('message', (message) => {
			const data = JSON.parse(message);
			this.blockchain.replaceChain(data);
		});
	}

	runServer() {
		const server = new Websocket.Server({port: P2P_PORT});
		server.on('connection', (socket) => { this.connectSocket(socket) });
		console.log(`Server running on port ${P2P_PORT}`);
	}
}

module.exports = P2PServer;