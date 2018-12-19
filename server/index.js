const express = require('express')
const path = require('path')
const app = express()

app.use('/assets', express.static(path.resolve(__dirname, '../frontend/compiled/assets')))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.listen(1234, _ => console.log('Listening at 1234'))