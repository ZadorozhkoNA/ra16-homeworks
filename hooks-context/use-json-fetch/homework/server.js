const http = require('http');
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <!doctype>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Мой сервер</title>

                <body>
                    <h1>Основы серверов на Node.js</h1>
                </body>
            </head>
        </html>
    `);
}).listen(5000, ()=>{console.log('Сервер работает')});

