import {Router} from 'express'
import {getAllUsers} from '../../controllers/users/index.js'
import data from '../../../data/index.js'

const usersRouter=Router()

// usersRouter.get("/",getAllUsers)

// @Get     "/"
// @desc    Get all users
// @access  Public
usersRouter.get('/',(req,res)=>{
    res.json(data)
    }
    )

// @Get     "/:id"
// @desc    Get single user
// @access  Public
usersRouter.get('/:id',(req,res)=>{
    const {id}=req.params
    res.json(data.filter(e=>e.id===id))
    }
    )


export default usersRouter