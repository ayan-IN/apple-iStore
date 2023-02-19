import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userControllers.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(getUserProfile)

export default router
