const http = require('http')
const fs = require('fs')
const url = require("url")

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.url} New Request Recived\n`
    const myUrl = url.parse(req.url, true)



    fs.appendFile("log.txt", log, (err, data) => {

        switch (myUrl.pathname) {
            case '/':
                if (req.method == 'GET') res.end("Hello From Home Page")

                break;
            case '/about':
                const username = myUrl.query.myname
                res.end(`Hi I Am ${username}`)
                break;
            case '/contact': res.end("Hello From Contact us")
                break;
            case "/signup":
                if (req.method === 'GET') res.end('User Signup')
                else if (req.method === 'POST') {
                    res.end("Success")
                }
            default: res.end('404 Not Found')
        }

    })
});
myServer.listen(8000, () => { console.log("Server Started"); })
