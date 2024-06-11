import express from 'express'
import cors from 'cors'

// import data from '../data/index.js'

import usersRouter from './routes/users/index.js'


const app = express()

const PORT = process.env.PORT || 8000

app.use(cors({origin:"*"}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome home!")
    })

app.use(`/api/v1/users`,usersRouter)


app.listen(PORT,()=>console.log(`Server is running on Port ${PORT}`))