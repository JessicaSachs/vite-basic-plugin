const { createServer } = require('vite')

createServer({
  plugins: [require('./myPlugin.js')]
}).listen(3000)
