import express from 'express'
const router = express.Router()

import {
  addOrderItems,
  getOrderByID,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid
} from '../controllers/orderControllers.js'
import { admin, protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderByID)
router.route("/:id/pay").put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router
