const http = require('http');
const server = http.createServer();
const PORT = 8000;
server.listen(PORT, function() {
    console.log(`server listening on ${PORT}`)
})