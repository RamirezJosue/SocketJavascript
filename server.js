var net = require('net');

var HOST = '127.0.0.1'; // parametrizar la IP

var PORT = 6969; // puerto TCP

// Crear un instancia del Servidor y esperar una conexion
net.createServer((sock) => {

    // Recibe una conexion
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    // Agrega una data
    sock.on('data', (data) => {
        sock.write(data);
    });

    // Cerrar
    sock.on('close', (data) => {
        // cerrar conexion
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Servidor escuchando ' + HOST + ':' + PORT);