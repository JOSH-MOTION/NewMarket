require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const http = require('http');
const { Server } = require('socket.io');

connectDB();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Socket.IO logic here...

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));