const http = require('http')
const fs = require('fs')


const myServer = http.createServer((req, res) => {

    const log = `${Date.now()} : ${req.url}New Request Recived\n`

    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("Hello From Home Page")
                break;
            case '/about': res.end("Hello From About")
                break;
            case '/contact': res.end("Hello From Contact us")
                break;
            default: res.end('404 Not Found')
        }

    })
});
myServer.listen(8000, () => { console.log("Server Started"); })
