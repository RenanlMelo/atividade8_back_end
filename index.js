const express = require('express')
const app = express()
const port = 8000

const cors = require('cors')
app.use(cors({
    origin: 'https://atividade8-front-end.vercel.app'
}))

app.get("/", (req, res) => {
    let datetime = new Date()
    let hour = datetime.toTimeString().split(' ')[0]
    let date = datetime.toISOString().split('T')[0]
    
    res.send({hour: `${hour}`, date: `${date}`})
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    
})