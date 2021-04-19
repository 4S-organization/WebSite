const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const http = require('http')

PORT = 8089;
const hostname = 'localhost';

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)
app.use(express.static('static'))

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('allah!\n');
});
server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
