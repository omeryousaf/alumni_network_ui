var express = require('express');
var app = express();

app.use(express.static(__dirname)); //serves the index.html
const server = app.listen(process.env.LIVE_SERVER_PORT || 3000, () => {
	console.log(`Live server listening on port ${server.address().port}`);
});