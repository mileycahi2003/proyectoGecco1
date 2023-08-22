
import express from 'express'
const app = express()
app.get('/', (req, res) => res.send('Trueke.com'))

app.listen(3000)
console.log('server is listenig on port', 3000)
