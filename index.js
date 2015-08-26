var server = require('./server/node_server'),
    route = require('./route'),
    requestHandler = require('./handler/requestHandler');

var handler = {}
handler['/start'] = requestHandler.start;
handler['/'] = requestHandler.start;
server.start(route.route, handler);

