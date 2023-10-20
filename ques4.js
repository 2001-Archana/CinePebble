const http = require('http');

function makeHttpGetRequest(url, callback) {
    http.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            callback(null, data);
        });
    }).on('error', (err) => {
        callback(err, null);
    });
}
const url = 'http://example.com';
makeHttpGetRequest(url, (error, response) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.log(`Response Body: ${response}`);
    }
});
