import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import cors from 'cors'
import carsRouter from './routes/cars.js'
import exteriorsRouter from './routes/exteriors.js'
import interiorsRouter from './routes/interiors.js'
import roofsRouter from './routes/roofs.js'
import wheelsRouter from './routes/wheels.js'


// import the router from your routes file


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())

app.use(express.json())

// if (process.env.NODE_ENV === 'development') {
//     app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
// }
// else if (process.env.NODE_ENV === 'production') {
//     app.use(favicon(path.resolve('public', 'lightning.png')))
//     app.use(express.static('public'))
// }

// specify the api path for the server to use


// if (process.env.NODE_ENV === 'production') {
//     app.get('/*', (_, res) =>
//         res.sendFile(path.resolve('public', 'index.html'))
//     )
// }

app.use("/cars", carsRouter);  // for cars related router
app.use("/exteriors", exteriorsRouter);  // for cars related router
app.use("/roofs", roofsRouter);  // for cars related router
app.use("/wheels", wheelsRouter);  // for cars related router
app.use("/interiors", interiorsRouter);  // for cars related router



app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})