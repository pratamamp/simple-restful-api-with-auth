const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')


app.get('/', (req, res) => res.json({ message: 'Testing API by tm'}))
app.use(express.json())
app.use(express.urlencoded());

app.use(cors())
// import routes
app.use(require('./routes/auth.routes'))
app.use(require('./routes/employee.routes'))

// connect DB
mongoose.connect(process.env.DB_CONNECTION, 
    {useUnifiedTopology: true, useNewUrlParser: true}
)
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database error'))
db.once('open', () => {
    console.log(`Database is connected`);
})
// listening
app.listen(process.env.PORT, () => console.log('Server okay!'))