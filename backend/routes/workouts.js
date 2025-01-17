const express = require('express')
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout } = require('../controllers/workoutController')



const router = express.Router()

router.get('/', getWorkouts)

//GET a workout
router.get('/:id',getWorkout)
//POST a workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)


//UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router
