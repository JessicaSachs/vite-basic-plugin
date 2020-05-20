const { createServer } = require('vite')

createServer({
  configureServer: [require('./myPlugin.js')]
}).listen(3000)
